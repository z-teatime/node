// const { promisify } = require('util')
const { exec, execFile } = require('child_process')
// const execWithPromise = promisify(exec)

// execFile(`d:/Documents/GitHub/node/node_modules/node-notifier/vendor/snoreToast/snoretoast-x64.exe`, [
//     '-pipeName',
//     '\\\\.\\pipe\\notifierPipe-44b18186-9a2d-4376-8e74-cd1139e573a1',
//     '-m',
//     'Hello, there!xxxx',
//     '-t',
//     'My notification'
// ])
execFile(`D:/AppData/nvm/v12.18.3/node.exe`, [
    `D:/AppData/nvm/v12.18.3/node_modules/node-notifier-cli/bin.js`,
    `-h`
    // '-t',
    // 'Hello, there!xxxx',
    // '-m',
    // 'My notification'
], function (error, stdout, stderr) {
    debugger
})
// const installServer = async () => {
//     const res = await execWithPromise(`npm -v`)
//     console.log(res)
// }

// installServer()
