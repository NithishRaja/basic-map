#README

main focus here is to implement geocoding in an server built with
express framework.

`ejs` is used as the `view engine` and `body-parser` is used to
access incoming post requests.

geocoding of location it done by connecting to `maps.googleapis.com`,
no apikey is required for this

rendering the map is handled client side. most of the heavy lifting for
rendering the map is done by the script from `maps.googleapis.com`.
apikey is required for this, which is located at `credentials.js`

`bootstrap` is used as the css framework for styling.

MVC framework is used for organizing the code on the server side.

for testing the routes `supertest` is used.
