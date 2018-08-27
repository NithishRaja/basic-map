# README

Simple node/express app that implements google maps api to display location of addresses

## Setting up

* Open cli and go to root directory of project
* run `npm install`
* If you have a api key of your own, replace it in `credentials.js` file
* run `node app.js` and visit http://localhost:3000 to view the app

## Editing code

* Primary file is `app.js` located in root directory
* Server logic is inside `/server` directory
* for debugging run `npm run debug` and open `http://127.0.0.1:8080/debug?port=5858`.

## Features

* `ejs` is used as the `view engine` and `body-parser` is used to access incoming post requests.
* rendering the map is handled client side. most of the heavy lifting for
* rendering the map is done by the script from `maps.googleapis.com`.
* `bootstrap` is used as the css framework for styling.
* MVC framework is used for organizing the code on the server side.
* for testing the routes `supertest` is used.
