const EntityService = require("../../../base_server_setup/services/EntityService");
const { uploadToCloudinary } = require("../../../utils/uploadFile");

class MediaService extends EntityService {
  constructor() {
    super("media");
    if (MediaService.instance) return MediaService.instance;
    MediaService.instance = this;
  }

  async createEntity(req) {
    /* Remove this from here, file will be upload from file and 
        call the entity service (which entity requests to upload file)
        which will store file references (ids).
    */
    //  check if file is single or in array if array upload using parallel processing
    const files = req.files || [req.file];

    const uploadedFiles = Promise.all(
      files.map(async (file) => {
        const fileData = await uploadToCloudinary(file.path);
        const body = {
          name: file.originalname,
          url: fileData.secure_url,
          sizeInBytes: fileData.bytes,
          format: file.mimetype,
          storageType: "CLOUD",
          requestEntity: "media",
        };
        return this.model.create(body);
      })
    );

    return uploadedFiles;
  }
}

module.exports = new MediaService();
