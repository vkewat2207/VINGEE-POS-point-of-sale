Building simple Point of Sale system with Node.js & React.js
#
react and react-redux
#
node
#
pos
#
react
Building real time applications can be exciting, the idea that pages can be updated without reloading has always been of interest to me.
For the this Project I have  created a real-time point of sale system using node.js and react.js

Get the source code and see demo here

This Project will comprise of three parts:

Part 1 (BackEnd)

Frameworks description
Building the Node app from scratch
Testing with Postman
Express
Database Mongodb
Part 2 (FrontEnd)


1.Creating a Template React app.
2.Creating Routes and Views with Code Description.

I recommend using the Vscode Editor for this Project.

Below are the libraries and frameworks we will be using:


nodemon: Nodemon checks for changes in your source and automatically restart your server.
body-parser: body-parser extract the entire body portion of an incoming request stream and exposes it on req.body .
http: Http allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

Let’s continue by creating the backend with node.js, I will assume you have node and npm installed.

**Building the Node app from scratch**

For this Project I am  going to create the Node app (express app) from scratch. it can also be done automatically using the ejs template.

Create a directory via your Command Line Interface (CLI) named real-time-pos-system

mkdir real-rime-pos-system

Access the folder via CLI thus:

cd real-time-pos-system

Inside your real-time-pos-system folder create new folder named serverfrom CLI

mkdir server

Let’s install our dependencies:

npm init

Press enter button for the following asked questions:

package name: (server) Press Enter
version: (1.0.0) Press Enter
description: Node.js app that connect the react-pos app to the Database 
entry point:(server.js) Press Enter
test command: Press Enter
git repository: Press Enter
keywords: Press Enter
author: Vinod Kewat
license: (ISC) MIT
you will be shown the following message:

{
    "name": "server"
    version: "1.0.0"
    "description": "Node.js app that connect the react-pos app to the Database 
    "main" : "server.js",
    "scripts": {
       test": "echo \"Error: no test specified\ specified\" && exit 1"
},
"author": "Vinod Kewat",
"license": "MIT"
}
Is this ok?(yes) yes
Install the following dependencies:

Backend Dependencies

npm install express --save

npm install http --save

npm install nodemon --save

npm install cors --save

npm install colors --save

npm install concurrently --save

npm install morgan --save

npm install dotenv --save

npm install spinner --save

npm install seeder

change sricpt file in package.json in backend like this to run both client and server from command prompt

 "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix ./client",
    "dev": "concurrently \"npm start server\" \"npm run client\"",
    "seed": "node seeder.js"
  },

Frontend dependencies

"dependencies": {
    "@redux-devtools/extension": "^3.3.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^5.21.2",
    "axios": "^1.7.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.2",
    "react-scripts": "5.0.1",
    "react-thunk": "^1.0.0",
    "react-to-print": "^3.0.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^3.1.0",
    "spinner": "^0.3.4",
    "web-vitals": "^2.1.4"
  },



