// Import Mongoose
const mongoose = require('mongoose');
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/PokemonStorageCenter', { useNewUrlParser: true});
let mongooseDbConnection = mongoose.connection;

module.exports = mongooseDbConnection;