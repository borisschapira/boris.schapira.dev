/**
 * postcss-prefers-reduced-motion plugin
 *
 *   Automatically append a single @media (prefers-reduced-motion: reduce) rule
 *   at the end of the compiled CSS covering selectors that use animation or
 *   transition. This removes repetitive prefers-reduced-motion blocks from
 *   source SCSS files and centralises the behaviour in generated CSS.
 *
 * How it works:
 *  - Walks the PostCSS AST and inspects top-level rules
 *    (skipping rules already inside a prefers-reduced-motion media query).
 *  - If a rule contains animation or transition declarations with values
 *    other than 'none' or '0s', the selector is recorded.
 *  - At the end, a single @media (prefers-reduced-motion: reduce) block is
 *    appended containing all gathered selectors instructions to remove
 *    animation and transition as per WCAG technique C39.
 *
 * Notes:
 *  The plugin uses '!important' so the reduced-motion rules reliably override
 *  other declarations in the generated CSS. If you need an opt-out for a
 *  selector, leave an inline comment like '/* prm-ignore *' on that rule and
 *  the plugin could be extended to honour it.
 */
const postcss = require('postcss');

module.exports = () => {
  return {
    postcssPlugin: 'postcss-prefers-reduced-motion',
    Once(root) {
      const rulesMap = new Map();

      root.walkRules(rule => {
        // skip rules already inside a prefers-reduced-motion media query
        if (
          rule.parent &&
          rule.parent.type === 'atrule' &&
          /prefers-reduced-motion/.test(rule.parent.params)
        )
          return;

        let hasMotion = false;
        rule.walkDecls(decl => {
          const p = decl.prop;
          if (/^animation/.test(p) || /^transition/.test(p)) {
            // any animation/transition property present
            if (!/none|0s/.test(decl.value)) hasMotion = true;
          }
        });

        if (hasMotion) {
          if (!rulesMap.has(rule.selector)) {
            const newRule = postcss.rule({ selector: rule.selector });
            newRule.append(postcss.decl({ prop: 'animation', value: 'none', important: true }));
            newRule.append(postcss.decl({ prop: 'transition', value: 'none', important: true }));
            rulesMap.set(rule.selector, newRule);
          }
        }
      });

      if (rulesMap.size > 0) {
        const mq = postcss.atRule({ name: 'media', params: '(prefers-reduced-motion: reduce)' });
        for (const r of rulesMap.values()) mq.append(r);
        root.append(mq);
      }
    },
  };
};

module.exports.postcss = true;
