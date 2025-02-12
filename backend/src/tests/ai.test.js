import request from "supertest";
import app from "../src/server"; // Import backend entry point

describe("🚀 API Endpoints Test Suite", () => {
  
  test("✅ Should generate AI-powered code", async () => {
    const response = await request(app).post("/api/generate").send({
      prompt: "Create a Python Fibonacci function",
      model: "deepseek",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("generatedCode");
  });

  test("❌ Should return error for empty prompt", async () => {
    const response = await request(app).post("/api/generate").send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Prompt is required");
  });

  test("✅ Should execute AI-generated code", async () => {
    const response = await request(app).post("/api/execute").send({
      code: "console.log('Hello, Quantum AI!');",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("output");
  });

  test("❌ Should handle execution errors", async () => {
    const response = await request(app).post("/api/execute").send({
      code: "invalid_code_syntax_!",
    });
    expect(response.status).toBe(500);
    expect(response.body.error).toBeDefined();
  });

});
