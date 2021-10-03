const axios = require('axios').default;
require('dotenv/config');

const pipedrive = axios.create({
  baseURL: `https://linkapi.pipedrive.com/v1/deals?api_token=${process.env.PIPEDRIVE_APP_API_KEY}`,
});

const bling = axios.create({
  baseURL: `https://bling.com.br/Api/v2/`,
});


module.exports = { pipedrive, bling };