#!/bin/bash

echo "=> Starting node.js"
node main.js &
PID=$!

echo "=> Running acceptance tests with protractor"
./node_modules/.bin/protractor protractor.js
STATUS="$?"

kill "$PID"
exit "$STATUS"
