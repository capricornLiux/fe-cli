// 容错的中间件
const errorHandler = {
    error(app, logger){
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