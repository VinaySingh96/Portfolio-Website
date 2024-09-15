const fs = require('fs');
const path = require('path');
const multer = require('multer');
const config = (new (require('../utils/configHandler'))()).getConfig();
const cloudinary = require('cloudinary').v2;

function uploadToLocal() {
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

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
  secure: true,
});

async function uploadToCloudinary(filepath) {
  try {
    const response = cloudinary.uploader.upload(filepath, {
      resource_type: 'raw'
    });
    console.log('-------------> File uploaded to cloudinary successfully ✅' )
    return response;
  } catch (error) {
    console.log('Upload to cloudinary failed! ❎', error)
  }

  return cloudinaryStorage;
}



const multerUpload = multer({ storage: multer.diskStorage({}) });

module.exports = {
  multerUpload,
  uploadToCloudinary,
  uploadToLocal
}