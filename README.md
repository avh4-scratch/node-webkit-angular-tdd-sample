## Prerequisites

 - Install [node.js](http://nodejs.org/)
    - mac with [homebrew](http://brew.sh/): `brew install node`
 - Download and install [node-webkit](https://github.com/rogerwang/node-webkit#downloads)
 - Download and install [Chrome Browser](https://www.google.com/intl/en/chrome/browser/)
 - Install [PhantomJS](http://phantomjs.org/)
    - mac with homebrew: `brew install phantomjs`
 - Install [Grunt](http://gruntjs.com/) CLI `npm install -g grunt-cli`

## Bootstrapping the project

```bash
npm install
./node_modules/.bin/webdriver-manager update
```

## Development commands

 - Run the app:
    - mac: `npm start`
    - windows: `nw C:\path\to\node-webkit-angular-tdd-sample`
    - linux: ``nw `pwd` ``
 - Run the tests: `npm test && npm run-script acceptance-test`
 - Build packaged app: `grunt nodewebkit` (output is in `./build/releases`)

