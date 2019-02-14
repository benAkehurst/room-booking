# Room Booking App
### A MEAN CRUD app that has a Nodejs backend and an Angular frontend.
The app allows users to book meeting rooms, and an admin can view and control the bookings from an admin panel.

### Prerequisites

```
nodejs
npm
Angualr CLI
```

## Server
* Built upon my [nodejs boilerplate project](https://github.com/benAkehurst/nodejs-api-server).
* [MongoDB](https://www.mongodb.com/) - NoSQL Database
* [Express](https://expressjs.com/) - Nodejs Framework
* [Nodejs](https://nodejs.org/en/) - The Server

## Client
* [Angular](https://angular.io/)
* [Angular Material](https://material.angular.io/)

## Deployment
* [Heroku](https://www.heroku.com/) - Cloud platform hosting the API server
* [MongoLab](https://mlab.com/) - Cloud NoSQL Database
* [Amazon S3](https://aws.amazon.com/s3/) - Hosting the SPA Client app

### Demo App
Coming soon...

### Installing

Clone the project to your local machine.

Make a .env file in the server root directory.

Open the `server` and `room-booking` folders in Terminal windows.

Run ```npm i``` to install npm dependencies in each window.

Once the npm dependencies have installed, in the server terminal window enter `nodemon server.js` and navigate to `http://localhost:3000/`.

In the client terminal, cd into the `room-booking` folder and run `ng serve` and navigate to `http://localhost:4200`.

## Authors

* **Ben Akehurst** - [benAkehurst](https://github.com/benAkehurst)

## Credits

* **[txwkx](https://github.com/txwkx/book-room)** - for the room images
* **[julia-](https://github.com/julia-/room-booking-system)** - for room model inspiration
