/**
 * @fileOverview 路由初始化
 * @author Lance
 */
import indexController from './indexController';
/**
 * 路由初始化
 */
const controllerInit = {
    /**
     * @function 获取所有路由
     * @param app app
     * @param router 路由对象
     */
    getAllRouters(app, router){
        app.use(router(_ => {
            // get /index 使用indexController中的indexAction处理
            _.get('/index', indexController.indexAction())
            _.get('/index/test', indexController.testAction())
          })
        )
    }
}

export default controllerInit;
