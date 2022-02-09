const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello World'
  }
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', { list: newsList });
  }
  async foo() {
    this.ctx.body = 'foo'
  }
}

module.exports = HomeController
