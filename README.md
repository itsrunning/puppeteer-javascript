[![Build Status](https://travis-ci.org/itsrunning/puppeteer-javascript.svg?branch=master)](https://travis-ci.org/itsrunning/puppeteer-javascript)
# puppeteer-javascript

Puppeteer is a Node library which provides a high-level API to control Chromium or Chrome over the DevTools Protocol.
Can also be used to run end to end tests against chrome.

## When should I use puppeteer
If there is an yes to any of the following puppeteer should be the choice of your tool
* Is your project supposed to support only chrome?
* Have your tests been running only against chrome?

## Get running...
Step 1: Clone this repository to your local
```javascript
git clone https://github.com/itsrunning/puppeteer-javascript.git
```

Step 2: Provided node is installed, install the npm packages
```javascript
cd puppeteer-javascript
npm install
```
note: this also installs the current version of chromium.

Step 3: To run the test run the following command
```javascript
npm test
```

## Walkthrough of the tests in the demo
* google_search_headless.spec.js - runs a google search and verifies the first result in headless mode (its by default)
* google_search.spec.js - runs the same test in debug mode
  * browser will be visible
  * can slow down the pace of execution
