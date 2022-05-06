const fs = require('fs');
const path = require('path');

const localEnvPath = path.resolve(__dirname, './.env.local');
let stats = fs.statSync(localEnvPath)

debugger
