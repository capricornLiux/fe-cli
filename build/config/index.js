'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
    // 设置环境变量
    env: process.env.NODE_ENV
};

// 测试tree-shaking
// 开发/生产环境的配置文件
if (false) {
    console.log('test tree shaking');
}

if (process.env.NODE_ENV === 'development') {
    let devConfig = {
        port: 8082

        // 使用lodash合并devConfig和config
    };config = _lodash2.default.extend(config, devConfig);
}

if (process.env.NODE_ENV === 'production') {
    let prodConfig = {
        port: 8083

        // 使用lodash合并devConfig和config
    };config = _lodash2.default.extend(config, prodConfig);
}

exports.default = config;