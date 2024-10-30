bundle up; pnpm up; cd tests; bundle up; pnpm up; cd ..; npx browserslist@latest; bundle exec rake "build:generate[prod]"; pnpm run build; bundle exec rake "build:generate[prod]"; say "Site généré, à tester.";
pnpn dlx http-server _site;
