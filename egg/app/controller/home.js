'use strict';

const Controller = require('egg').Controller;
const notifier = require('node-notifier')

function notify(params) {
  notifier.notify('Message')
}
notify()
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {
    const { ctx } = this;
    const { body } = ctx.request
    // console.log('ctxxxxxx', ctx.request, ctx.request.body, ctx.response)
    console.log('message:', body.commits.map(o => `${o.id.slice(0, 5)}: ${o.message} ${o.timestamp}`).join('\n'))
    console.log('notifier', notifier)
    debugger

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
