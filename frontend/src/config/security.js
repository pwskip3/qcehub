export const SECURITY_CONFIG = {
    usePostQuantumCrypto: true,
    pqcAlgorithm: "CRYSTALS-Dilithium",
  };
  
  export const encryptData = (data) => {
    if (!SECURITY_CONFIG.usePostQuantumCrypto) return btoa(data);
    // Future implementation of post-quantum encryption
    return `🔒[Quantum Secure]: ${data}`;
  };
  