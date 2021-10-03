const mongoose = require('../configs/database');
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
  get_time: { 
    type: Date, 
    require: true
  }
});

module.exports = mongoose.model('oportunities', OpportunitySchema);