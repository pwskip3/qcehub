import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const AI_API_URL = process.env.AI_API_URL;

export const generateSecureCode = async (prompt, model = "deepseek") => {
  try {
    const response = await fetch(`${AI_API_URL}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, model }),
    });

    if (!response.ok) throw new Error("AI API Error");

    const data = await response.json();
    return { generatedCode: data.generatedCode };
  } catch (error) {
    return { error: error.message };
  }
};
