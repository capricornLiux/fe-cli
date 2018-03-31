const Mocha = require('mocha');
const mocha = new Mocha({
    reporter: 'mochawesome',    
    reporterOptions: {
        reportDir: './doc/report'
    }
});
mocha.addFile('./test/spec/router.spec.js');
mocha.run(function () {
    console.log('all done');
    process.exit();
})