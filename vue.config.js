module.exports = {
    assetsDir: 'assets/',
    // publicPath: 'http://heserver/', // base directory for exeToPHP tool
    publicPath: '/', // Base directory for dev
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                data: `@import "@/styles/main.scss";`
            }
        }
    },

    chainWebpack: config => {
        config.module
          .rule('fonts')
          .test(/\.(ttf|otf|eot|woff|woff2)$/)
          .use('file-loader')
            .loader('file-loader')
            // .tap(options => Object.assign(options, { limit: 10240 }))
            .tap(options => {
                options = {
                    limit: 10240,
                    name: '/assets/fonts/[name].[ext]',
                }

                return options
            })
            .end()
    }
};