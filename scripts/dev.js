#!/usr/bin/env node
const { execSync } = require('child_process');

// Run next dev, binding to all interfaces for Tempo
try {
  execSync('npx next dev --hostname 0.0.0.0', {
    stdio: 'inherit',
    env: { ...process.env }
  });
} catch (e) {
  process.exit(e.status || 1);
}
