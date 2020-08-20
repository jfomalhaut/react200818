module.exports = {
    entry: [  //시작점
        "./src/index.js"
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"  //어떤파일로 묶을지 - output
    },
    devServer: { //자동 새로고침
        contentBase: "./dist",
        port: 3000,     
        historyApiFallback: true
    }
}
