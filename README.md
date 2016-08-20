# avhs-test
A little test project for avhs

## Dependencies 

* nodejs 4.4.2+ (and npm)
* webpack 1.12.9

Install nodejs for your environment from [NodeJS.org](www.nodejs.org)

## Develop 

Begin with `npm install` in root directory. Depending on your installation `sudo` might be needed.

Start webpack server with `nodejs webpack-server.js`
Start the api server with `nodejs server.js`

Open browser and go to `localhost:9098`

## Build the project and run "production"

To build the project, make sure you have webpack installed. 
 
Run `webpack` (To get minified version type `webpack -p`). A folder called `dist/` will be created. 
Some warnings probably, but they doesn't matter.

Then run `nodejs server.js`

Open browser and go to `localhost:9090`
