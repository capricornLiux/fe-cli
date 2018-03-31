import IndexModel from '../models/indexModel';
const indexController = {
    // 动作
    indexAction(){
        return async(ctx, next)=>{
            // 创建数据模型实例
            const indexModel = new IndexModel();
            console.log(indexModel);
            // 使用await获取异步数据
            const result = await indexModel.getData();
            console.log(result);
            // 返回body内容
            ctx.body = result;
        }
    }
}

export default indexController;