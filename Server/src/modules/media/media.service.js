const EntityService = require("../../../base_server_setup/services/EntityService");
const { FileUpload } = require('../../../base_server_setup/utils/FileUpload');

class MediaService extends EntityService {
  constructor() {
    super("media");
    if (MediaService.instance) return MediaService.instance;
    MediaService.instance = this;
  }

  async createEntity(body, params, query, req) {
    /* Remove this from here, file will be upload from file and 
        call the entity service (which entity requests to upload file)
        which will store file references (ids).
    */

    if (!body.mediaType) throw new Error('MediaType is required!');
    
    const fileUpload = new FileUpload();
    //  check if file is single or in array if array upload using parallel processing    
    const files = req.files || [req.file];

    const uploadedFiles = await Promise.all(
      files.map(async (file) => {
        const fileData = await fileUpload.uploadToCloudinary(file.path, file.mimetype.split('/')[0], file.originalname);
        body.url = fileData.secure_url;
        body.format = file.mimetype;
        body.storageType = 'CLOUD'
      })
    );

    const filter = {
      mediaType: body.mediaType
    };
    const options = {
      new: true,
      upsert: true
    }
    // TODO: use this.model.create when doc not exist(it runs validations unlike findOneAndUpdate)
    // const updatedDoc = this.model.create(body);
    const updatedDoc = this.model.findOneAndUpdate(filter, body, options);

    return updatedDoc;
  }
}

module.exports = new MediaService();
