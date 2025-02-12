import jwt from "jsonwebtoken";
import pqcrypto from "@pqcrypto/sign";
import bcrypt from "bcrypt";
import { cacheData, getCachedData, clearCache } from "./storage";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "supersecuresecret";
const TOKEN_EXPIRY = "1h"; // Adjust token lifetime as needed

// Generate a post-quantum secure keypair using CRYSTALS-Dilithium
const generatePQCKeyPair = () => {
  const { publicKey, privateKey } = pqcrypto.keyPair();
  return { publicKey, privateKey };
};

// Generate Secure JWT Token with Post-Quantum Encryption
export const generateToken = (user) => {
  const { publicKey } = generatePQCKeyPair();
  return jwt.sign({ id: user.id, role: user.role, pqc: publicKey }, SECRET, {
    expiresIn: TOKEN_EXPIRY,
  });
};

// Verify JWT Token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
};

// Middleware for Secured Routes
export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ error: "Unauthorized" });

    const decoded = verifyToken(token);
    if (!decoded) return res.status(403).json({ error: "Invalid Token" });

    // Check if session is cached
    const cachedUser = await getCachedData(`user:${decoded.id}`);
    if (!cachedUser) return res.status(403).json({ error: "Session Expired" });

    req.user = cachedUser;
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal Authentication Error" });
  }
};

// Role-Based Access Control (RBAC)
export const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: "Access Denied" });
  }
  next();
};

// Register a New User
export const registerUser = async (username, password, role = "user") => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), username, password: hashedPassword, role };
  
  // Cache user session
  await cacheData(`user:${user.id}`, user);

  return { token: generateToken(user) };
};

// Login User
export const loginUser = async (username, password) => {
  const user = await getCachedData(`user:${username}`);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Credentials");

  return { token: generateToken(user) };
};

// Logout User (Clear Cache)
export const logoutUser = async (userId) => {
  await clearCache(`user:${userId}`);
  return { message: "Logout successful" };
};
