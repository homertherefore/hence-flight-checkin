#!/usr/bin/env bash

cd ../hence-card
gulp build
cd ../hence-flight-checkin/bower_components/hence-card
cp -vR ../../../hence-card/dist .
cd ../..

cd ../hence-html
gulp build
cd ../hence-flight-checkin/bower_components/hence-html
cp -vR ../../../hence-html/dist .
cd ../..
gulp
