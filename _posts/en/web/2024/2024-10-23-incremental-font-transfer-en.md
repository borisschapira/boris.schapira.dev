---
title: Incremental Font Transfer
subtitle: an opportunity for Asian web fonts
translations:
    fr: incremental-font-transfer-fr
---

From a French perspective, Asian languages such as Chinese, Japanese, and Korean, along with others that utilize complex scripts, often encompass a broad range of characters. While this diversity is culturally fascinating, it poses significant challenges when selecting a web font. The potential for large file sizes can result in slower loading times, particularly on mobile devices or in regions with limited internet connectivity.

To give you an order of magnitude of the weight difference, this is the latin-extended subset:

> Conclusion: the median font file with Latin-extended subset of (395) characters should be a little **under 20K**. If you look at your network requests and your font is much larger, well there's work for you to do. <cite>"[How many bytes is “normal” for a web font: a study using Google fonts](https://www.phpied.com/bytes-normal-web-font-study-google-fonts/)", Stoyan Stefanov</cite>

And this is for Chinese:

> Within one Chinese font type, the smallest standard font contains 6,763 characters. A Japanese font type called Hanazono has 87,791 characters. A typical Chinese font file size is usually **at least 5MB, some times can be over 20MB**. <cite>"[Chinese Typographic Design](https://medium.com/@Hynuza/typographic-design-in-asian-language-4bb1035ebb7)", Hynuza</cite>

As a result, it is common to refrain from using web fonts for web pages that are accessible online in this region.

Optimization is still possible. One effective method is subsetting, which involves creating a "subset" of a font—a file that includes a customized (and typically limited) selection of glyphs. But even with basic high school Chinese, we would need a minimum of 3,000 characters.

I was aware that streaming fonts was not possible, but a recent post from [Anthony](https://indieweb.social/@anthony) on the Web Performance Slack caught my attention. He was promoting a new draft specification specifically designed for that purpose.

> Without this technology, a browser needs to download every last byte of a font before it can render any characters using that font <cite>"[Incremental Font Transfer](https://www.w3.org/TR/IFT/)", W3C Working Draft</cite>

The idea is to create a font face that can be segmented into an initial load, efficiently subsetting what's critical, then add patches that complete the font along the way. Lazy-loading, but for typefaces.

This initial iteration, once (and if) implemented in the browsers, has the potential to unlock significant opportunities for Asian markets. I'm excited, even if I'm not looking forward to mastering font descriptors such as `size-adjust` or `ascent-override` to effectively manage the user experience during the subsequent loading of thousand-glyph patches!
