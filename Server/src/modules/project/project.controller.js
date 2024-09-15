const EntityController = require('../../../base_server_setup/controllers/EntityController');
const { crud } = require('../../../base_server_setup/utils/constants')

class ProjectController extends EntityController {
  constructor() {
    // update crud object according to your need
    super('project', crud);
    this.routePrefix = 'project';
  }
}

module.exports = ProjectController;
