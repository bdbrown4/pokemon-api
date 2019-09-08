// Import Schema Service 
const SchemaService = require('../services/mongoose-schema.service');
// Retrieves all items
exports.retrieveItems = function (_req, _res) {
    SchemaService.retrieveItems(_req, _res);
}
// Adds item
exports.addItem = function (_req, _res) {
    SchemaService.addItem(_req, _res);
}