const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model('Inquiry', InquirySchema);

router.post('/', async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        await inquiry.save();
        res.json({ message: "Inquiry submitted successfully" });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;