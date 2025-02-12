import { Redis } from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redis = new Redis(process.env.REDIS_URL);

export const cacheData = async (key, value, ttl = 3600) => {
  try {
    await redis.setex(key, ttl, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Redis Error:", error);
    return false;
  }
};

export const getCachedData = async (key) => {
  try {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Redis Read Error:", error);
    return null;
  }
};

export const clearCache = async (key) => {
  try {
    await redis.del(key);
    return true;
  } catch (error) {
    console.error("Redis Deletion Error:", error);
    return false;
  }
};
