'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {
    const { ctx } = this;
    console.log('ctxxxxxx', ctx)
    ctx.body = {
      code: 200,
      data: 'xxxx'
    }
  }
}

module.exports = HomeController;
