module.exports = {
    entry: {
        app: './app/index.js'
    },
    output: {
        filename: './build/js/[name].js',
        //path: paths.dist(),
        //publicPath: config.compiler_public_path
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
        ]
    }
}
