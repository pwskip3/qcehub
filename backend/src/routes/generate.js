import express from "express";
import { generateAIResponse } from "../src/ai/deepseek";
import rateLimiter from "../src/middleware/rateLimiter";

const router = express.Router();

router.post("/generate", rateLimiter, async (req, res) => {
  try {
    const { prompt, model = "deepseek" } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const aiResponse = await generateAIResponse(prompt, model);
    return res.status(200).json({ generatedCode: aiResponse });
  } catch (error) {
    return res.status(500).json({ error: "AI Generation Failed", details: error.message });
  }
});

export default router;
