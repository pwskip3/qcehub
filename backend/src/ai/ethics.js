// backend/src/ai/ethics.js
export function checkEthicalCompliance(code) {
    const bannedKeywords = ["gambling", "hacking", "malware"];
    
    for (const keyword of bannedKeywords) {
        if (code.includes(keyword)) {
            throw new Error(`Ethical Violation: Code contains banned term '${keyword}'`);
        }
    }
    return true;
}