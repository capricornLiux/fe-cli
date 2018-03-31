import IndexModel from '../models/indexModel';
const indexController = {
    // 动作
    indexAction(){
        return async(ctx, next)=>{
            // 创建数据模型实例
            const indexModel = new IndexModel();
            // 使用await获取异步数据
            const result = await indexModel.getData();
            // 返回body内容
            // ctx.body = result;
            // 渲染模板引擎...
            ctx.body = await ctx.render('index', { tag: result });
        }
    }
}

export default indexController;