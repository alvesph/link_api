const express = require('express');
const router = express.Router();

const OpportunityController = require('../controllers/OpportunityController');

router.post('/', OpportunityController.create); 
router.get('/:id', OpportunityController.show);

module.exports = router;