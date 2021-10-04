const mongoose = require('mongoose');
require('dotenv/config');

// const uri = process.env.DATABASE_KEY;

const uri = "mongodb+srv://alvesph:6DYaptmaOKIp89TM@linkapi.s880p.mongodb.net/linkapi?retryWrites=true&w=majority"

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { 
    console.log('MongoDB conectado!')
  })
  .catch(err => console.log(err))

module.exports = mongoose;