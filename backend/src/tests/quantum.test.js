import { generateQuantumKey, verifyQuantumAuth } from "../src/quantum/quantum_auth";

describe("🔐 Quantum Security Test Suite", () => {

  test("✅ Should generate a quantum-secure key pair", async () => {
    const { publicKey, privateKey } = generateQuantumKey();
    expect(publicKey).toBeDefined();
    expect(privateKey).toBeDefined();
  });

  test("✅ Should verify post-quantum authentication", async () => {
    const userSession = {
      publicKey: "test-public-key",
      quantumSignature: "test-signature",
    };
    const result = verifyQuantumAuth(userSession);
    expect(result).toBe(true);
  });

  test("❌ Should reject invalid quantum authentication", async () => {
    const result = verifyQuantumAuth(null);
    expect(result).toBe(false);
  });

});
