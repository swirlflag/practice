const path = require('path');

module.exports = {
    mode : 'none',
    entry : './src/index.js',
    output : {
        // __dirname : 현재 디렉토리를 의미 . 여기서 dist 디렉토리를 찾음
        path : path.resolve(__dirname,'dist'),
        filename : 'main.js',
    }
}