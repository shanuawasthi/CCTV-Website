const express = require("express");
const router = express.Router();
const ChatbotQA = require("../models/ChatbotQA");

// GET all Q&A
router.get("/", async (req, res) => {
    try {
        const data = await ChatbotQA.find({});
        // convert to { question: answer } object
        const qaObj = {};
        data.forEach(item => {
            qaObj[item.question.toLowerCase()] = item.answer;
        });
        res.json(qaObj);
    } catch(err) {
        res.status(500).json({ message: "Failed to fetch chatbot Q&A" });
    }
});

// POST new Q&A (Admin)
router.post("/", async (req, res) => {
    try {
        const { question, answer } = req.body;
        if(!question || !answer) return res.status(400).json({ message: "Both question & answer required" });

        // Create or update
        const existing = await ChatbotQA.findOne({ question });
        if(existing){
            existing.answer = answer;
            await existing.save();
            return res.json({ message: "Q&A updated successfully" });
        }

        await ChatbotQA.create({ question, answer });
        res.json({ message: "Q&A added successfully" });
    } catch(err) {
        res.status(500).json({ message: "Failed to add Q&A" });
    }
});

// DELETE Q&A (Admin)
router.delete("/:id", async (req, res) => {
    try{
        await ChatbotQA.findByIdAndDelete(req.params.id);
        res.json({ message: "Q&A deleted successfully" });
    } catch(err){
        res.status(500).json({ message: "Failed to delete Q&A" });
    }
});

module.exports = router;