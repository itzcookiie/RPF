const path = require('path')

const pageFolders = ['Announcements', 'About', 'Departments', 'Services'].reduce((allPageFolders,pagefolder) => {
    return {
        ...allPageFolders,
        [pagefolder]:  `${path.resolve(__dirname, `src/${pagefolder}/index.js`)}`
    }
}, {})

console.log(pageFolders)

module.exports = {
    entry: pageFolders,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 5000,
        publicPath: '/dist/',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

}