// Import Schema Service 
const SchemaService = require('../services/mongoose-schema.service');
// Handle index actions
exports.retrievePokemon = function (_req, _res) {
    SchemaService.retrievePokemon(_req, _res);
};
// Handle create Pokemon actions
exports.addPokemon = function (_req, _res) {
    
};

// Retrieves Pokemon by name
exports.retrievePokemonByName = function (_req, _res) {
    
};