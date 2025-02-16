// src/utils.js
const { execSync } = require('child_process');

function checkBrewInstalled() {
    try {
        execSync('brew --version', { stdio: 'ignore' });
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = { checkBrewInstalled };
