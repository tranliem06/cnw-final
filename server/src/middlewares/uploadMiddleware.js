const multer = require('multer');
const config = require('../config/index');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.product_images_url); 
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`); 
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
  