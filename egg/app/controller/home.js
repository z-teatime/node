'use strict';

const Controller = require('egg').Controller;
// const notifier = require('node-notifier');
const { execFile } = require('child_process');

// function notify(params) {
//   notifier.notify('Message')
// }
// notify()
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {
    const { ctx } = this;
    const { body } = ctx.request
    // console.log('ctxxxxxx', ctx.request, ctx.request.body, ctx.response)
    const message = body.commits.map(o => `${o.id.slice(0, 5)}: ${o.message} ${o.timestamp}`).join('\n')
    console.log('message:',  message)
    // this.ctx.logger('message', message)
    // console.log('notifier', notifier)

    // const { promisify } = require('util')
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
        // `-h`
        // '-t',
        'Hello, there!xxxx',
        '-m',
        'My notification'
    ], function (error, stdout, stderr) {
        debugger
    })
    // const installServer = async () => {
    //     const res = await execWithPromise(`npm -v`)
    //     console.log(res)
    // }

    // installServer()

    // notifier.notify('Message')
    // notify()

    // notifier.notify({
    //   // title: body.object_kind,
    //   // message: body.commits.map(o => `${o.id.slice(0, 5)}: ${o.message} ${o.timestamp}`).join('\n\t')
    //   title: 'body.object_kind',
    //   message: '1111111111111111'
    // })

    ctx.body = {
      code: 200,
      data: ctx.request.body
    }
  }
}

module.exports = HomeController;
