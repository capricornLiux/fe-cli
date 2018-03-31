'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 创建app实例


// 引入配置文件


// 引入日志框架
const app = new _koa2.default();

// 设置错误日志输出格式


// 引入静态资源文件


// 引入模板


// 引入router
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

_controllerInit2.default.getAllRouters(app, _koaSimpleRouter2.default);

// 配置模板引擎
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.tplPath,
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html'
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions
}));

// 使用koa-static处理静态文件
app.use((0, _koaStatic2.default)(_config2.default.staticPath));

// 监听端口
app.listen(_config2.default.port, function () {
    console.log(`server at port ${_config2.default.port}`);
});