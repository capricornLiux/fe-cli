// 容错的中间件
const errorHandler = {
    error(app, logger){

        // 处理中间件错误/500
        app.use(async(ctx, next)=>{
            try {
                await next();
            } catch (error) {
                logger.error(error);
                ctx.status = error.status || 500
                ctx.body = 500;
            }
        })

        // 处理404问题
        app.use(async(ctx, next)=>{
            // 使用async next机制
            await next();
            if(ctx.status != 404) {
                // 页面不是404, 直接返回
                return;
            } else {
                ctx.status = 404;
                ctx.body = '页面丢了';
                logger.error('页面丢了!');
            }
        })
    }
}

export default errorHandler;