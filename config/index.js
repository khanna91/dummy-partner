const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example')
});

module.exports = {
  partnerName: process.env.partnerName,
  domain: process.env.domain,
  partnerKey: process.env.partnerKey
};
