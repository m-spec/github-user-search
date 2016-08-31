var path = require("path")

module.exports = {
    appSrc: path.resolve(__dirname, "..", "src"),
    appNodeModules: path.resolve(__dirname, "..", "node_modules"),
    appHtml: path.resolve(__dirname, "..", "index.html"),
    appBuild: path.resolve(__dirname, "..", "build"),
}