const mongoose = require('../configs/connection');
const Schema = mongoose.Schema;

const OpportunitySchema = new Schema({
  description: { 
    type: String, 
    require: true 
  },
  status: { 
    type: String, 
    require: true 
  },
  value: { 
    type: Number, 
    require: true 
  },
  when: { 
    type: Date, 
    require: true
  }
});

module.exports = mongoose.model('oportunities', OpportunitySchema);