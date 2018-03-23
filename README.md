# [BorisSchapira.com](https://borisschapira.com)

My Jekyll v3 setup.

## Installation

### Prerequisites

* Bundler
* Docker (for SonarQube code coverage only)
* Homebrew (for SonarQube code coverage only)

### Installation

```
bundle install
```

### Local development/writing

```
bundle exec rake
```

### Coverage 

#### Installation

```
docker pull sonar-qube
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

#### Execution

```
bundle exec rake sonar
```

## License

* Structure of this website released under [MIT License](LICENSE.md).
* Content of this website released under CC-by License
