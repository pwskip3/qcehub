-- Add Indexes for Optimized Query Performance

-- Optimizing AI Code Retrieval Speed
CREATE INDEX idx_generated_code_user_id ON generated_code(user_id);
CREATE INDEX idx_generated_code_created ON generated_code(created_at);

-- Speeding Up Execution Log Queries
CREATE INDEX idx_execution_logs_user_id ON execution_logs(user_id);
CREATE INDEX idx_execution_logs_code_id ON execution_logs(code_id);
CREATE INDEX idx_execution_logs_executed ON execution_logs(executed_at);

-- Optimize Authentication Queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
