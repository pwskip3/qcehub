// backend/src/ai/compliance.js
export function checkCompliance(userData) {
    if (!userData.age || userData.age < 13) {
        throw new Error("User does not meet COPPA compliance age requirement");
    }
    
    if (!userData.dataStorageConsent) {
        throw new Error("User did not provide data storage consent (GDPR compliance issue)");
    }
    
    return true;
}
