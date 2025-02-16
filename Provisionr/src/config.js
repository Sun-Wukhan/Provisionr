// src/config.js
const fs = require('fs');
const yaml = require('js-yaml');

function loadPackages(configPath) {
    try {
        const fileContents = fs.readFileSync(configPath, 'utf8');
        const data = yaml.load(fileContents);
        return data.packages || [];
    } catch (e) {
        console.error('Error loading config file:', e);
        process.exit(1);
    }
}

module.exports = { loadPackages };
