// src/installer.js
const { execSync } = require('child_process');

function installBrew() {
  console.log("Homebrew not found. Attempting to install Homebrew...");
  try {
    // This command downloads and runs the Homebrew install script.
    execSync('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"', { stdio: 'inherit' });
    console.log("Homebrew installed successfully.");
  } catch (error) {
    console.error("Failed to install Homebrew. Please install it manually. Error:", error.message);
    process.exit(1);
  }
}

function installBrewPackage(packageName, isCask) {
  const command = isCask ? `brew install --cask ${packageName}` : `brew install ${packageName}`;
  console.log(`Installing ${packageName}...`);
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to install ${packageName}. Error: ${error.message}`);
  }
}

module.exports = { installBrew, installBrewPackage };
