// src/index.js
const readline = require('readline');
const { checkBrewInstalled } = require('./utils');
const { loadPackages } = require('./config');
const { installBrew, installBrewPackage } = require('./installer');

function promptBrewInstallation(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Homebrew is not installed. Would you like to install it now? (yes/no): ", answer => {
    rl.close();
    callback(answer.trim().toLowerCase());
  });
}

if (!checkBrewInstalled()) {
  promptBrewInstallation(answer => {
    if (answer === 'yes' || answer === 'y') {
      installBrew();
      proceedWithInstallations();
    } else {
      console.error("Homebrew is required. Exiting Provisionr.");
      process.exit(1);
    }
  });
} else {
  proceedWithInstallations();
}

function proceedWithInstallations() {
  const packages = loadPackages('./config/packages.yaml');
  packages.forEach(pkg => {
    installBrewPackage(pkg.name, pkg.cask);
  });
}
