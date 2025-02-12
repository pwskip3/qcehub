// backend/src/ai/mistral_model.js
import fetch from "node-fetch";

export async function generateMistralCode(prompt) {
    const apiUrl = process.env.MISTRAL_API_URL;
    const apiKey = process.env.MISTRAL_API_KEY;

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ prompt, model: "mistral" }),
    });

    if (!response.ok) {
        throw new Error("Mistral AI Model request failed");
    }

    return response.json();
}