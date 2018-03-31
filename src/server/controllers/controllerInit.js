import indexController from './indexController';
const controllerInit = {
    getAllRouters(app, router){
        app.use(router(_ => {
            // get /index 使用indexController中的indexAction处理
            _.get('/index', indexController.indexAction())
            // _.post('/name/:id', (ctx, next) => {
            //   // ... 
            // })
          })
        )
    }
}

export default controllerInit;
