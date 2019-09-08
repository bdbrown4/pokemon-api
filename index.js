// Import express
const express = require('express');
// Import routes
const apiRoutes = require("./api-routes/pokemon.routes");
// import bodyParser
const bodyParser = require('body-parser');
// import mongooseDbConnection
const mongooseDbConnection = require('./services/mongoose-provider.service');
// Initialize the app
const app = express();
// Setup server port
let port = process.env.PORT || 8080;
// Added check for DB connection
mongooseDbConnection ? console.log("Db connected successfully") : console.log("Error connecting db");
// Send message for default URL
app.get('/', (_req, _res) => _res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running Pokemon Center API Gateway on port " + port);
});
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());
// Use Api routes in the App
app.use('/api', apiRoutes);
app.use('/retrievePokemon', apiRoutes);