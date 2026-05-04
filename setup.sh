#!/bin/bash

# Setup script for Next.js migration
# Run this script to organize files and install dependencies

cd "$(dirname "$0")"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Run the Node setup script
node setup.js
