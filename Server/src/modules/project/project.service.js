const EntityService = require('../../../base_server_setup/services/EntityService');
const { FileUpload } = require('../../../base_server_setup/utils/FileUpload');

class ProjectService extends EntityService{
  constructor() {
    super('project');
    if(ProjectService.instance) return ProjectService.instance;
    ProjectService.instance = this;
  }

  async createEntityPreHook(body, params, query, req) {
    const files = req.files || [req.file];
    const fileUpload =  new FileUpload();
    body.photos = [];
    const uploadedFiles = await Promise.all(
      files.map(async (file, index) => {
        const fileData = await fileUpload.uploadToCloudinary(file.path, file.mimetype.split('/')[0]);
        if (index === 0) body.thumbnails = fileData.secure_url;
        body.photos.push(fileData.secure_url);
        // Add this file details to file service
        // const body = {
        //   name: file.originalname,
        //   url: fileData.secure_url,
        //   sizeInBytes: fileData.bytes,
        //   format: file.mimetype,
        //   storageType: "CLOUD",
        //   requestEntity: "media",
        // };
      })
    );

    return { body, params, query };
  }
}

module.exports = new ProjectService();
