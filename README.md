# 前端架构
### 前端文件夹划分
* src 开发文件夹, 不参与上线
* 上线的代码build, 通过编译而来
* 外面的config, webpack
* 里面的config, node的配置
* 使用gulp编译node, 简单, 相比webpack编译更加快速
---
### gulp编译node(结合roll-up进行tree-shaking)
###### 思路1
1. dev: 正常使用gulp-watch进行编译
2. prod: 不需要gulp-watch了, 忽略```config->index.js```文件
3. config: 使用roll-up单独处理```config->index.js```