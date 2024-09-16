const EntityController = require('../../../base_server_setup/controllers/EntityController');
const { crud } = require('../../../base_server_setup/utils/constants');

class MediaController extends EntityController {
  constructor() {
    super('media', crud);
    this.routePrefix = 'media';
  }
}

module.exports = MediaController;
