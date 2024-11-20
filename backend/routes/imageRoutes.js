const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Directory to store uploaded images

// Upload image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image({
      path: req.file.path, // Save the path to the image
      originalName: req.file.originalname,
    });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image' });
  }
});

// Get all images
router.get('/', async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images' });
  }
});

module.exports = router;
