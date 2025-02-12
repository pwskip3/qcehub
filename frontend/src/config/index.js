const CONFIG = {
    APP_NAME: "QCEHub",
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.qcehub.com",
    AI_MODELS: ["DeepSeek", "Mistral", "OpenAI"],
    THEME: {
      darkMode: true,
      primaryColor: "#3b82f6",
      secondaryColor: "#2563eb",
    },
    SECURITY: {
      ENABLE_POST_QUANTUM_CRYPTO: true,
      AUTH_METHOD: "JWT",
    },
  };
  
  export default CONFIG;
  