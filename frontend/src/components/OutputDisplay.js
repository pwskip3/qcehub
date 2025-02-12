import { useState } from "react";

export default function OutputDisplay({ code }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 p-4 bg-gray-800 text-white font-mono relative">
      <pre>{code || "// Your AI-generated code will appear here..."}</pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
