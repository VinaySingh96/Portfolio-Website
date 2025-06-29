const { initServer, startServer } = require('./base_server_setup');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const ConfigHandler = require('./utils/configHandler');
require('dotenv').config();


async function start() {
  const argv = yargs(hideBin(process.argv)).argv;
  
  const configHandler = new ConfigHandler(argv.env);
  const config = configHandler.getConfig();

  const mode = argv.mode || 'api';
  config.port = config.port;
  const app = await initServer({ config, mode });

  const { connectToDatabase } = require('./src/dbUtils/createConnection');
  await connectToDatabase();
}

start();
