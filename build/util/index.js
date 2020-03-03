const path = require('path');

exports.resolve = (dir) => path.resolve(__dirname, `../${dir}`);
exports.join = (dir) => path.join(__dirname, `../${dir}`);
