import bcrypt from "bcrypt";
import { generateToken } from "./auth";
import { cacheData, getCachedData } from "./storage";

const users = []; // In-memory store (replace with DB later)

export const registerUser = async (username, password, role = "user") => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, username, password: hashedPassword, role };
  users.push(user);
  return { token: generateToken(user) };
};

export const loginUser = async (username, password) => {
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid Credentials");
  }
  return { token: generateToken(user) };
};

export const getUser = async (id) => {
  const cachedUser = await getCachedData(`user:${id}`);
  if (cachedUser) return cachedUser;

  const user = users.find((u) => u.id === id);
  if (user) await cacheData(`user:${id}`, user);
  return user;
};
