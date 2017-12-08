const Path = require('path');

const SRC_DIR = Path.resolve(__dirname, 'src');
const DIST_DIR = Path.resolve(__dirname, 'dist');

let config = {
    entry: `${SRC_DIR}/index.js`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR,
    }
};

module.exports = config;