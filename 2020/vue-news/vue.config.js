const path = require('path');

console.log(path);

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    }
}