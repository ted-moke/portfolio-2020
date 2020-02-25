module.exports = {
    assetsDir: 'assets/',
    publicPath: '/', // Base directory for dev
    css: {
      sourceMap: true,
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/main.scss";`
        }
      }
    },
  
    chainWebpack: config => {
      config.module
        .rule("fonts")
        .test(/\.(ttf|otf|eot|woff|woff2)$/)
        .use("file-loader")
          .loader("file-loader")
          .tap(options => {
            options = {
              name: '/assets/fonts/[name].[ext]',
            }
  
            return options
          })
          .end()
    }
  };