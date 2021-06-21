const { exec, execFile } = require('child_process')

exec('start ./node_modules/puppeteer/.local-chromium/win64-884014/chrome-win/chrome.exe --remote-debugging-port=9222')

// taskkill /f /im chrome.exe
