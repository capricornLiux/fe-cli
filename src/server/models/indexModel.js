class IndexModel {
    constructor(){

    }
    getData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve("hello swig")
            }, 2000);
            // 如果这里throw一个错误, 容错中间件会捕获到错误, 进行log
        })
    }
}

export default IndexModel;