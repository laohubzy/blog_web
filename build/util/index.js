const path = require("path");
exports.resolve = function (dir) {
    return path.resolve(__dirname, `../${dir}`)
}
exports.join = function (dir) {
    return path.join(__dirname, `../${dir}`)
}