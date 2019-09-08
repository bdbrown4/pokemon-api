// Import Schema Service 
const SchemaService = require('../services/mongoose-schema.service');
// Retrieves all items
exports.retrieveItems = function (_req, _res) {
    SchemaService.retrieveItems(_req, _res);
}
// Adds item
exports.addItems = function (_req, _res) {
    SchemaService.addItems(_req, _res);
}