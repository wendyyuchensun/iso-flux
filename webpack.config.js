const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.js'
    }
};
