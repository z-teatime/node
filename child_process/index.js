const { promisify } = require('util')
const { exec } = require('child_process')
const execWithPromise = promisify(exec)

const installServer = async () => {
    const res = await execWithPromise(`npm -v`)
    console.log(res)
}

installServer()
