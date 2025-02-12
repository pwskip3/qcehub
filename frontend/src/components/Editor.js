import { useState, useEffect } from "react";
import PromptInput from "./PromptInput";
import OutputDisplay from "./OutputDisplay";

export default function Editor() {
  const [code, setCode] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCode = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setCode(data.generatedCode || "Error generating code.");
    } catch (error) {
      setCode("Error fetching AI-generated code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4">
      <PromptInput setPrompt={setPrompt} generateCode={generateCode} loading={loading} />
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 border p-2 font-mono bg-gray-900 text-white"
        readOnly
      />
      <OutputDisplay code={code} />
    </div>
  );
}
