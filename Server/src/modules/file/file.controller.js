const EntityController = require('../../../base_server_setup/controllers/EntityController');
const { crud } = require('../../../base_server_setup/utils/constants')

class FileController extends EntityController {
  constructor() {
    // update crud object according to your need
    super('file', crud);
    this.routePrefix = 'file';
  }
}

module.exports = FileController;
