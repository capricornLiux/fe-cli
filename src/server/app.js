import Koa from 'koa';

// 引入日志框架
import log4js from 'log4js';
import errorHandler from './middlewares/errorHandler';

// 引入配置文件
import config from './config';

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

// 监听端口
app.listen(config.port, function () {
    console.log(`server at port ${config.port}`)
})