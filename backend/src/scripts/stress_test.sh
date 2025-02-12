#!/bin/bash

# QCE Stress Testing Script
# Simulates 1M daily active users (DAU) accessing the API

echo "🔥 Starting QCE Stress Test (1M DAU Simulation)..."

# Ensure k6 is installed
if ! command -v k6 &> /dev/null
then
    echo "⚠️ k6 is not installed. Installing now..."
    brew install k6 || sudo apt install k6 -y
fi

# Run the stress test
k6 run - <<EOF
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 1000000 },  // Ramp up to 1M users in 2 minutes
        { duration: '10m', target: 1000000 }, // Sustain 1M users for 10 minutes
        { duration: '2m', target: 0 },        // Ramp down
    ],
};

export default function () {
    let res = http.get('https://qcehub.vercel.app/api/generate');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}
EOF

if [ $? -eq 0 ]; then
  echo "✅ Stress Test Completed Successfully!"
else
  echo "❌ Stress Test Failed! Check API performance logs."
  exit 1
fi
