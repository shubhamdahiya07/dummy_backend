const express = require('express');
const multer  = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 9000;

app.use(cors()); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'C:\\Users\\Shubham\\Desktop\\localSto';
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/api/localUpload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    const fileLink = `http://localhost:${port}/uploads/${req.file.filename}`;

    console.log('File uploaded successfully:', fileLink);
    res.status(200).json({ link: fileLink });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('An error occurred during file upload');
  }
});

app.use('/uploads', express.static('C:\\Users\\Shubham\\Desktop\\localSto'));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
