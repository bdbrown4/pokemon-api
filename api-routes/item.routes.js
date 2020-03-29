// Initialize express router
const router = require('express').Router();
// // Import item controller
const itemController = require('../controllers/item.controller');

/**
 * @swagger
 * definitions:
 *   Item:
 *     properties:
 *       _id:
 *         type: string
 *       name:
 *         type: string
 * 
 * 
 *   ItemArray:
 *     type: array
 *     items:
 *       minItems: 1
 *       type: object
 *       required: ["name"]
 *       properties:
 *          name:
 *              type: string
 */

/**
 * @swagger
 * /item/retrieveItems:
 *   get:
 *     tags:
 *       - Item
 *     description: Returns all items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of items
 *         schema:
 *           type: array
 *           items: '#/definitions/ItemArray'
 *         headers:
 *            Access-Control-Allow-Origin:
 *              type: string
 *            
 */
router.route('/item/retrieveItems').get(itemController.retrieveItems);
/**
* @swagger
* /item/addItems:
*   post:
*     parameters:
*        - in: body
*          name: pokemon
*          description: The item description you need to add
*          schema:
*            $ref: '#/definitions/ItemArray'  
*     tags:
*       - Item
*     description: Adds an item with all the required fields
*     produces:
*       - application/json
*     responses:
*       200:
*         description: An object of a single Item
*         schema:
*           $ref: '#/definitions/ItemArray'
*         headers:
*            Access-Control-Allow-Origin:
*              type: string
*/
router.route('/item/addItems').post(itemController.addItems);

// Export API routes
module.exports = router;