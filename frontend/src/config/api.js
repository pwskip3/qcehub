import axios from "axios";
import CONFIG from "./index.js";

export const generateCode = async (prompt, model = "DeepSeek") => {
  try {
    const response = await axios.post(`${CONFIG.API_BASE_URL}/api/generate`, {
      prompt,
      model,
    });
    return response.data.generatedCode;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const executeCode = async (code) => {
  try {
    const response = await axios.post(`${CONFIG.API_BASE_URL}/api/execute`, {
      code,
    });
    return response.data.output;
  } catch (error) {
    console.error("Execution Error:", error);
    return "Execution failed.";
  }
};
