const { promisify } = require('util')
const { exec } = require('child_process')
const execWithPromise = promisify(exec)

const installServer = async () => {
    const res = await execWithPromise(`notify -t 'Hello' -m 'My message'`)
    console.log(res)
}

installServer()
