const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
 
// 开发环境的编译node
gulp.task('build-dev', function () {
    // 每当文件发生变化, 就重新编译server下的js文件
    return watch('./src/server/**/*.js', {ignoreInitial: false}, function () {
        gulp.src('./src/server/**/*.js')
        .pipe(babel({
            "plugins": ["transform-es2015-modules-commonjs"]
          }))
        .pipe(gulp.dest('./build'))
    });
});

// 生产环境编译node
gulp.task('build-prod', function () {
    gulp.src('./src/server/**/*.js')
        .pipe(babel({
            "plugins": ["transform-es2015-modules-commonjs"]
        }))
        .pipe(gulp.dest('./build'))
});

// 生产环境编译node-优化(使用roll-up进行tree-shaking)
gulp.task('build-config', function(){
    gulp.src('./src/server/config/*.js')
        .pipe(rollup({
            format: 'cjs',
            input: './src/server/config/index.js',
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('./build/config/'))
})

var __task = ['build-dev'];
if(process.env.NODE_ENV == 'production'){
    // 如果是生产环境, 那么使用
    __task = ['build-prod']
}
if(process.env.NODE_ENV == 'config'){
    __task = ['build-config']
}
gulp.task('default', __task);