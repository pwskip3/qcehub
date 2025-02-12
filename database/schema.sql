-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW()
);

-- AI-Generated Code Table
CREATE TABLE generated_code (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    prompt TEXT NOT NULL,
    generated_code TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Code Execution Logs
CREATE TABLE execution_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    code_id INT REFERENCES generated_code(id) ON DELETE CASCADE,
    execution_output TEXT NOT NULL,
    executed_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for Performance Optimization
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_code_created ON generated_code(created_at);
CREATE INDEX idx_logs_executed ON execution_logs(executed_at);
