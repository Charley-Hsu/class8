var Koa = require('koa');
var Router = require('koa-router');
var Router = require('koa-logger');
var Router = require('koa-bodyparser');
var Router = require('koa-json');
const app = new Koa();
app.use(async(ctx) => {
	ctx.body = 'hello koa2'
});
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
module.exports = app;