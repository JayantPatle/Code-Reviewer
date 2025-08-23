const aiService = require('../services/ai.service.js');

module.exports.getReview = async (req, res) => {
    const  prompt = req.body.code;
    if(!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await aiService.generateResponse(prompt);
    res.send(response);
};