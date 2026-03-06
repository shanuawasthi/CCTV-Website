const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const adminAuth = require('../middleware/adminAuth'); // JWT middleware

// GET contact info (public)
router.get('/', async (req, res) => {
  try {
    let contact = await Contact.findOne();
    if(!contact){
      contact = await Contact.create({ address:'', phone:'', email:'', whatsapp:'' });
    }
    res.json(contact);
  } catch(err){
    res.status(500).json({ message: err.message });
  }
});

// PUT contact info (admin only)
router.put('/', adminAuth, async (req, res) => {
  try {
    const { address, phone, email, whatsapp } = req.body;
    let contact = await Contact.findOne();
    if(!contact){
      contact = await Contact.create({ address, phone, email, whatsapp });
    } else {
      contact.address = address;
      contact.phone = phone;
      contact.email = email;
      contact.whatsapp = whatsapp;
      await contact.save();
    }
    res.json({ message: "Contact info updated", contact });
  } catch(err){
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;