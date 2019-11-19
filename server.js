require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = new Router()


// Custom 401 Error Handling
app.use(async function (ctx, next) {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      let errMessage = err.originalError ?
        err.originalError.message :
        err.message
      ctx.body = {
        error: errMessage
      };
      ctx.set("X-Status-Reason", errMessage)
    } else {
      throw err;
    }
  });
});

router.get("/", (ctx, next) => {
  let defaultJsonRes = {
    ping: 'pong',
    success: true,
    message: "Welcome to API Server",
    vendor: "GATE Academy Shop",
    from: ctx.ip,
    developer: "Ethereal Corporate Networks!",
    envs: process.env
  };
  ctx.body = defaultJsonRes;
})


app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(5000)