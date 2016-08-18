const webpack = require("webpack");
const config = require("./webpack.config");
const WebpackDevServer = require("webpack-dev-server");


const server = new WebpackDevServer(webpack(config), {
        proxy: {
            "*": 'http://localhost:9090'
        }
    }
);
server.listen(9098, 'localhost');
