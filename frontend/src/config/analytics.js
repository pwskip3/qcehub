export const trackEvent = (eventName, data) => {
    console.log(`[Analytics] Event: ${eventName}`, data);
    // Send to backend analytics API if needed
  };
  
  export const trackAIUsage = (model, prompt) => {
    trackEvent("AI Model Used", { model, prompt });
  };
  