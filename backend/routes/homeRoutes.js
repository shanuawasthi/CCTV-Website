const express = require("express");
const router = express.Router();
const HomeContent = require("../models/HomeContent");

const multer = require("multer");
const path = require("path");

// ================= Multer Setup for Certificates =================
const certificateStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/certificates"); // ye folder tumne create kiya hai
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // unique name
    }
});

const uploadCertificate = multer({ storage: certificateStorage });

// GET home content
router.get("/", async (req, res) => {
    const data = await HomeContent.findOne();
    res.json(data);
});

// UPDATE home content
router.post("/update", async (req, res) => {
    const existing = await HomeContent.findOne();

    if (existing) {
        await HomeContent.updateOne({}, req.body);
    } else {
        await HomeContent.create(req.body);
    }

    res.json({ message: "Home content updated successfully" });
});

// ================= Upload Certificates (Admin) =================
router.post("/update-certificates", uploadCertificate.single("certificateImage"), async (req, res) => {
    try {
        const { certificationText } = req.body; // admin ne text input me jo dala
        const imagePath = req.file ? "/certificates/" + req.file.filename : "";

        const existing = await HomeContent.findOne();

        if (existing) {
            // agar pehle se record hai
            await HomeContent.updateOne({}, {
                certificationText,
                certificationImage: imagePath
            });
        } else {
            await HomeContent.create({
                certificationText,
                certificationImage: imagePath
            });
        }

        res.json({ message: "Certificate updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to update certificate" });
    }
});

module.exports = router;