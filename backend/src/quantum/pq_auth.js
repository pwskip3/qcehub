import { randomBytes } from "crypto";
import { Dilithium } from "pqcrypto"; // PQC Library for post-quantum security
import dotenv from "dotenv";

dotenv.config();

class QuantumAuth {
  constructor() {
    this.keys = null;
  }

  async generateKeys() {
    if (!this.keys) {
      this.keys = await Dilithium.keyPair();
    }
    return this.keys;
  }

  async signMessage(message) {
    if (!this.keys) await this.generateKeys();
    const signature = await Dilithium.sign(message, this.keys.privateKey);
    return { message, signature };
  }

  async verifySignature(message, signature, publicKey) {
    return await Dilithium.verify(message, signature, publicKey);
  }

  async secureSession(userId) {
    const sessionToken = randomBytes(32).toString("hex");
    const { publicKey } = await this.generateKeys();
    return { userId, sessionToken, publicKey };
  }
}

export default new QuantumAuth();
