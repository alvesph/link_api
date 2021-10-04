const OpportunityModel = require('../models/OpportunityModel');

class OpportunityController{
  
  async create(req, res){

    const opportunity = new OpportunityModel(req.body);
    await opportunity 
          .save()
          .then(response => {
            return res.status(200).json(response)
          })
          .catch(error => {
            return res.status(500).json(error)
          });
  }

  async show(req, res){
    await opportunity.findById(req.params.id)
          .then(response => {
            if(response)
              return res.status(200).json(response);
            else
              return res.status(404).json({error: 'Not find'});
          })
          .catch(error => {
            return res.status(500).json(error);
          })
  }

}

module.exports = new OpportunityController();