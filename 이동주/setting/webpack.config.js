module.exports = {
    entry: [ //시작점 
        "./src/index.js" // 이러한 폴더를 만듬 
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
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    output: { // 어떻게 출력할지 
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: { // 수정한 후 새로고침 없이 바로 수정됨
        contentBase: "./dist",
        port: 3000,
        historyApiFallback: true
    }
}    