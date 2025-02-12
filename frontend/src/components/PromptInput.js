import { useState } from "react";

export default function PromptInput({ setPrompt, generateCode, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrompt(input);
    generateCode();
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        className="flex-grow p-2 border rounded text-black"
        placeholder="Enter AI prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 bg-blue-600 text-white rounded ${loading && "opacity-50 cursor-not-allowed"}`}
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>
    </form>
  );
}
