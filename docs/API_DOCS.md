# 📡 QCEHub API Documentation

## 🚀 Base URL
- **Development:** `http://localhost:3001`
- **Production:** `https://api.qcehub.com`

## 📌 Authentication
- **Token-Based Auth:** Use **JWT Bearer Tokens** for authentication.
- **Headers Required:** `"Authorization": "Bearer YOUR_ACCESS_TOKEN"`

## **1️⃣ Generate AI Code**
`POST /api/generate`
#### **Request**
```json
{
  "prompt": "Create a secure login system",
  "ai_model": "deepseek"
}
