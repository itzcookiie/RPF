const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pageFolders = ['About', 'Home', 'Announcements', 'Calendar', 'Contact', 'Livestream'].reduce((allPageFolders,pagefolder) => {
    if(pagefolder === 'About') {
        const folders = ['AboutUs', 'ChurchHistory']
        return folders.reduce((currentFolders, folder) => {
            return {
                ...currentFolders,
                    [folder]: {
                        import: `${path.resolve(__dirname, `src/${pagefolder}/${folder}/index.js`)}`,
                        filename: `${pagefolder}/${folder}/index.js`
                    }
            }
        }, {})
    }
    return {
        ...allPageFolders,
        [pagefolder]:  `${path.resolve(__dirname, `src/${pagefolder}/index.js`)}`
    }
}, {})

console.log(pageFolders)

const htmlFiles = ['About', 'Home', 'Announcements', 'Calendar', 'Contact', 'Livestream'].reduce((allPageFolders, pagefolder) => {
    if(pagefolder === 'About') {
        const folders = ['AboutUs', 'ChurchHistory']
        return folders.reduce((currentFolders, folder) => {
            return [
                ...currentFolders,
                new HtmlWebpackPlugin({
                    filename: path.resolve(__dirname, `dist/${pagefolder}/${folder}/index.html`),
                    inject: false,
                    chunks: [folder],
                    template: path.resolve(__dirname, `src/${pagefolder}/${folder}/index.html`),
                    scriptLoading: 'defer'
                })
            ]
        }, [])
    }
        return [
            ...allPageFolders,
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, `dist/${pagefolder}/index.html`),
                inject: false,
                chunks: [pagefolder],
                template: path.resolve(__dirname, `src/${pagefolder}/index.html`),
                scriptLoading: 'defer'
            })
        ]
}, [])

module.exports = {
    mode: 'production',
    entry: {...pageFolders},
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/image/',    // where the fonts will go
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          mozjpeg: {
                            progressive: true,
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            optimizationLevel: 5 ,
                          },
                          pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: true,
                          },
                          // the webp option will enable WEBP
                          webp: {
                            quality: 75
                          }
                        }
                      }
                ]
            }
        //     {
        //     test: /\.html$/i,
        //     use: [
        //         'file-loader?name=[name].[ext]', 'extract-loader', 'html-loader',
        //     ]
        // }
        ]
    },
    plugins: [
        ...htmlFiles,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]

}