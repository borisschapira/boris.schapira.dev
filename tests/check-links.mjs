import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

describe('🔗 Links are valid', function () {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const RUN_DIR = resolve(__dirname, '..');

  it('validates site with htmlproofer', function () {
    // Run the existing npm script defined in tests/package.json

    execFileSync(
      'bundle',
      [
        'exec',
        'htmlproofer ./_site --disable-external --no-enforce-https --allow-missing-href --no-check-external-hash --checks "Links,Scripts"',
      ],
      {
        cwd: RUN_DIR,
        stdio: 'inherit',
      }
    );
  });
});
