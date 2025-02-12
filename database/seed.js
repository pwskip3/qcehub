import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const seedDatabase = async () => {
  try {
    await pool.query(`
      INSERT INTO users (username, email, password_hash, role)
      VALUES
        ('admin', 'admin@qcehub.com', '$2b$10$hashedpassword', 'admin'),
        ('user1', 'user1@qcehub.com', '$2b$10$hashedpassword', 'user');
    `);

    console.log("✅ Database seeded successfully.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
