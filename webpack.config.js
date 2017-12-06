const path = require("path");

const SRC_PATH = path.resolve(__dirname, "src");
const DIST_PATH = path.resolve(__dirname, "dist");

const config = {
    entry: `${SRC_PATH}/js/index.js`,
    output: {
        filename: 'bundle.js',
        path: DIST_PATH,
    }
};

module.exports = config;