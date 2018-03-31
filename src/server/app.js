import Koa from 'koa';
import config from './config';
const app = new Koa();
app.use(async(ctx, next) => {
    ctx.body = 'hello koa!'
})
app.listen(config.port, function () {
    console.log(`server at port ${config.port}`)
})