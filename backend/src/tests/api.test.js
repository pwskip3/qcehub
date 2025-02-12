import { generateAIResponse, checkEthicalCompliance } from "../src/ai/deepseek";

describe("🧠 AI Code Generation Test Suite", () => {

  test("✅ Should generate AI-powered secure code", async () => {
    const response = await generateAIResponse("Create a secure authentication function", "deepseek");
    expect(response).toBeDefined();
    expect(response).toContain("function");
  });

  test("❌ Should block unethical AI-generated code", async () => {
    const isCompliant = checkEthicalCompliance("function hackBankAccount() {}");
    expect(isCompliant).toBe(false);
  });

});
