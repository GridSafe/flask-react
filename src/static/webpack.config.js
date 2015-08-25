module.exports = {
    entry:{
        entry1: './app.js'
    },

    output: {
        path: './',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders:[
            {test: /\.jsx?$/, loaders: ['jsx-loader']},
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/
            }
        ]
    }
}
