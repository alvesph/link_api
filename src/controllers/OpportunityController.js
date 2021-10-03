const Opportunity = require('../models/OpportunityModel');

module.exports = {
  async index(request, response) {
    const oportunities = await Opportunity.find();
    return response.status(200).json(oportunities)
  }
}