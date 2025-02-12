-- Migration Script: Add Quantum Security Column
ALTER TABLE users ADD COLUMN quantum_key TEXT DEFAULT NULL;
ALTER TABLE users ADD COLUMN pqc_auth_token TEXT DEFAULT NULL;
