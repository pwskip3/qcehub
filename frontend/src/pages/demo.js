import { useState } from "react";
import Editor from "../components/Editor";
import EthicsOverlay from "../components/EthicsOverlay.svelte";

export default function Demo() {
  const [violations, setViolations] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center">Live AI Code Demo</h1>
      <p className="text-center text-lg mt-2">Generate code in real-time with AI</p>

      <div className="mt-6">
        <Editor />
      </div>

      <EthicsOverlay violations={violations} />
    </div>
  );
}
