const EntityService = require('../../../base_server_setup/services/EntityService');

class FileService extends EntityService{
  constructor() {
    super('file');
    if(FileService.instance) return FileService.instance;
    FileService.instance = this;
  }
}

module.exports = new FileService();
