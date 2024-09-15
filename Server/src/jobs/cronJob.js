const config = require('../../config/localDevelopment.json');
const { initCronRunner } = require('../../base_server_setup/cronRunner')

initCronRunner(config);