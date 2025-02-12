import express from "express";
import { executeCodeSafely } from "../src/services/codeExecutor";
import rateLimiter from "../src/middleware/rateLimiter";

const router = express.Router();

router.post("/execute", rateLimiter, async (req, res) => {
  try {
    const { code, language = "javascript" } = req.body;
    if (!code) return res.status(400).json({ error: "Code is required" });

    const executionResult = await executeCodeSafely(code, language);
    return res.status(200).json({ output: executionResult });
  } catch (error) {
    return res.status(500).json({ error: "Execution Failed", details: error.message });
  }
});

export default router;
