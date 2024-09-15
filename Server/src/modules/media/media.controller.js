const EntityController = require('../../../base_server_setup/controllers/EntityController');
const { crud } = require('../../../base_server_setup/utils/constants');
const { bindMethods } = require('../../../base_server_setup/utils/helper');
const { multerUpload } = require('../../../utils/uploadFile');


class MediaController extends EntityController {
  constructor() {
    super('media', crud);
    this.routePrefix = 'media';
    this.multerUpload = multerUpload;
    bindMethods(MediaController.prototype, this);
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.post('/', this.multerUpload.single('file'), this.uploadFile);
    this.router.post('/upload-multiple', this.multerUpload.array('files'), this.uploadFile);
    super.loadRoutes();
  }

  async uploadFile(req, res) {
    const data = await this.service.createEntity(req); // Handle the service logic for your entity

    res.send({
      data: data,
      message: `${this.serviceName}s fetched successfully 😊`
    });
  }
}

module.exports = MediaController;
