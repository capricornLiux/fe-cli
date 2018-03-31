import Koa from 'koa';

// 引入日志框架
import log4js from 'log4js';
import errorHandler from './middlewares/errorHandler';

// 引入配置文件
import config from './config';

// 引入router
import router from 'koa-simple-router';
import controllerInit from './controllers/controllerInit';

// 引入模板
import render from 'koa-swig';
import co from 'co';

// 引入静态资源文件
import serve from 'koa-static';

// 创建app实例
const app = new Koa();

// 设置错误日志输出格式
log4js.configure({
    appenders: { 
        'fe-cli': { 
            type: 'file', 
            filename: 'fe-cli.log' 
        } 
    },
    categories: { 
        default: { 
            appenders: ['fe-cli'], 
            level: 'error' 
        } 
    }
});
   
const logger = log4js.getLogger('fe-cli');

// 使用容错的middleware
errorHandler.error(app, logger);

// 异步输出
// app.use(async(ctx, next) => {
//     ctx.body = 'hello koa!'
// })

controllerInit.getAllRouters(app, router);

// 配置模板引擎
app.context.render = co.wrap(render({
    root: config.tplPath,
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions
}));

// 使用koa-static处理静态文件
app.use(serve(config.staticPath));

// 监听端口
app.listen(config.port, function () {
    console.log(`server at port ${config.port}`)
})