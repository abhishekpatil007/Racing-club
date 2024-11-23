const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Fetch all events
router.get('/api/events', async (req, res) => {
    try {
      const events = await Event.find(); // Fetch events from the database
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching events' });
    }
  });

// Add a new event
router.post('/add-event', async (req, res) => {
  console.log('Received request to add event:', req.body); // Debugging log
  const event = new Event(req.body);
  try {
    const newEvent = await event.save();
    console.log('Event saved:', newEvent); // Debugging log
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error saving event:', error); // Debugging log
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
