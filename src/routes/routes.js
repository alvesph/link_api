const { Router } = require('express');

const IntegrationController = require('../controllers/IntegrationController');
const OpportunityController = require('../controllers/OpportunityController');

const routes = Router();

routes.get('/bling', IntegrationController.index) 
routes.get('/pipedrive', OpportunityController.index)

module.exports = routes;