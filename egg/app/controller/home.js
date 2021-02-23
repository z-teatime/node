'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {
    const { ctx } = this;
    console.log('ctxxxxxx', ctx.request, ctx.request.body)
    debugger
    ctx.body = {
      code: 200,
      data: ctx.request.body
    }
  }
}

module.exports = HomeController;
