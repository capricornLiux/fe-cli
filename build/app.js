'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 创建app实例
const app = new _koa2.default();

// 设置错误日志输出格式


// 引入配置文件


// 引入日志框架
_log4js2.default.configure({
    appenders: {
        'fe-cli': {
            type: 'file',
            filename: 'fe-cli.log'
        }
    },
    categories: {
        default: {
            appenders: ['fe-cli'],
            level: 'error'
        }
    }
});

const logger = _log4js2.default.getLogger('fe-cli');

// 使用容错的middleware
_errorHandler2.default.error(app, logger);

// 异步输出
// app.use(async(ctx, next) => {
//     ctx.body = 'hello koa!'
// })

// 监听端口
app.listen(_config2.default.port, function () {
    console.log(`server at port ${_config2.default.port}`);
});