
// backend/src/ai/deepseek.js
import fetch from "node-fetch";

export async function generateDeepSeekCode(prompt) {
    const apiUrl = process.env.DEEPSEEK_API_URL;
    const apiKey = process.env.DEEPSEEK_API_KEY;

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ prompt, model: "deepseek" }),
    });

    if (!response.ok) {
        throw new Error("DeepSeek AI Model request failed");
    }

    return response.json();
}