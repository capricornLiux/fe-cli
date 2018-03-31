'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

// 开发/生产环境的配置文件
let config = {
    // 设置环境变量
    env: "production"
};

// 测试tree-shaking
{
    let prodConfig = {
        port: 8083
    };

    // 使用lodash合并devConfig和config
    config = _.extend(config, prodConfig);
}

var config$1 = config;

module.exports = config$1;
