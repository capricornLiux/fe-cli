// 开发/生产环境的配置文件
const path = require('path');
import _ from 'lodash';
let config = {
    // 设置环境变量
    env: process.env.NODE_ENV,

    // 设置路径
    path: path.join(__dirname, '../views'),
};

// 测试tree-shaking
if(false){
    console.log('test tree shaking')
}

if(process.env.NODE_ENV === 'development'){
    let devConfig = {
        port: 8082
    }

    // 使用lodash合并devConfig和config
    config = _.extend(config, devConfig);
}

if(process.env.NODE_ENV === 'production'){
    let prodConfig = {
        port: 8083
    }

    // 使用lodash合并devConfig和config
    config = _.extend(config, prodConfig);
}

export default config;