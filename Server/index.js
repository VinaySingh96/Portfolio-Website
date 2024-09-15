const { initServer, startServer } = require('./base_server_setup');
const { connectToDatabase } = require('./src/dbUtils/createConnection');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const ConfigHandler = require('./utils/configHandler');
require('dotenv').config();


async function start() {
  console.log(process.env['kafka/clientId']);
  const argv = yargs(hideBin(process.argv)).argv;


  const configHandler = new ConfigHandler(argv.env);
  const config = configHandler.getConfig();
  const mode = argv.mode || 'api';
  const app = await initServer({ config, mode });
  await connectToDatabase();
}

start();
