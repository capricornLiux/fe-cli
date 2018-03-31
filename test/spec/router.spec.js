const request = require('supertest');
// import app from '../../src/server/app';
// const app = require('../../src/server/app');
const app = require('../../build/app');

function func(){
    return request(app.listen());
}

describe('自动化测试', function () {
    it('接口测试正确性测试', function (done) {
        func()
            .get('/index/test')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) 
                    return done(err);
                done();
            });
    });

    it('404测试', function (done) {
        func()
            .get('/index/error.html')
            .expect(500, done)
    });
});