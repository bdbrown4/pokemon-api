// Import Mongoose
const mongoose = require('mongoose');
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/PokemonStorageCenter', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
const mongooseDbConnection = mongoose.connection;

module.exports = mongooseDbConnection;