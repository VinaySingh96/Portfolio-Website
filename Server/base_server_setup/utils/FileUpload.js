const fs = require('fs');
const path = require('path');
const multer = require('multer');
const BaseController = require('../controllers/BaseController');
const cloudinary = require('cloudinary').v2;

class FileUpload extends BaseController{
  constructor() {
    super();

    if (FileUpload.instance) return FileUpload.instance;

    FileUpload.instance = this;
    this.initCloudinary();
  }

  initCloudinary() {
    // if (cloudinary.config) return;
    cloudinary.config({
      cloud_name: this.config.cloudinary.cloudName,
      api_key: this.config.cloudinary.apiKey,
      api_secret: this.config.cloudinary.apiSecret,
      secure: true,
    });
  }

  async uploadToCloudinary(filepath, fileType, fileName) {
    // this.initCloudinary();
    const supportedFormat = ['image', 'audio', 'video'];
    const payload = {
      resource_type: supportedFormat.includes(fileType) ? fileType : 'raw',
      folder: 'portfolio',  // Uploads files into 'portfolio' folder
      allowed_formats: ['image', 'audio', 'video'].includes(fileType) ? ['jpg', 'png', 'jpeg', 'mp4', 'mp3', 'gif'] : undefined,
      ...(!supportedFormat.includes(fileType) && { public_id: fileName, format: 'pdf' })
    };
    try {
      const response = await cloudinary.uploader.upload(filepath, payload);
      console.log('-------------> File uploaded to cloudinary successfully ✅' )
      return response;
    } catch (error) {
      console.log('-------------> Upload to cloudinary failed! ❎', error)
    }
  }

  uploadToLocal() {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const localStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadDir); // Save files in the 'uploads' folder
      },
      filename: (req, file, cb) => {
        // Preserve the original file name and extension
        const ext = path.extname(file.originalname);
        const fileName = `${file.fieldname}-${Date.now()}${ext}`; // Use fieldname and timestamp for uniqueness
        cb(null, fileName);
      }
    });
  }

}

const multerUpload = multer({ storage: multer.diskStorage({}) });

module.exports = {
  multerUpload,
  FileUpload
}