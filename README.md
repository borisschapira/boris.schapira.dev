<!-- @format -->

# [boris.schapira.dev](https://boris.schapira.dev)

My Jekyll v3 setup.
[![Netlify Status](https://api.netlify.com/api/v1/badges/8d29f6c7-0b97-4227-aed7-8e51c276900c/deploy-status)](https://app.netlify.com/sites/borisschapira/deploys) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=borisschapira/boris.schapira.dev)](https://dependabot.com)

## Installation

### Prerequisites

-   Bundler
-   npm (I recommend installing node via nvm)
-   globally install puppeteer for visual tests

### Installation

```
bundle install;
npm install;
```

### Local development/writing

```
bundle exec rake;
```

### Build for Production

```
npm run comments:get;
bundle exec rake "build:generate[prod]";
npm run build;
bundle exec rake test;
```

## License

-   Structure of this website released under [MIT License](LICENSE.md).
-   Content of this website released under CC-by License
