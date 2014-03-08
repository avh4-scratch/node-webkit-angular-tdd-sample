## Prerequisites

 - Install [node.js](http://nodejs.org/)
    - mac with [homebrew](http://brew.sh/): `brew install node`
 - Download and install [node-webkit](https://github.com/rogerwang/node-webkit#downloads)
 - Install [PhantomJS](http://phantomjs.org/)
    - mac with homebrew: `brew install phantomjs`
 - Install [Grunt](http://gruntjs.com/) CLI `npm install -g grunt-cli`

## Development commands

 - Run the app:
    - mac: `npm start`
    - windows: `nw C:\path\to\node-webkit-angular-tdd-sample`
    - linux: ``nw `pwd` ``
 - Run the tests: `npm test`
 - Build packaged app: `grunt nodewebkit` (output is in `./build/releases`)

