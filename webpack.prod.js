const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports={

    devtool: 'source-map',

    entry:{
        index:'./src/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename:'[id][hash].js',
        publicPath:'/'
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
                output: {
                    comments: false,
                },
            }
          }),
          new OptimizeCSSAssetsPlugin({})
        ],
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use:['babel-loader']
          },
          {
            test: /\.(scss|sass|css)$/, 
            use:[
              {
                loader: "style-loader"
              },
              { 
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader:"css-loader",
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: {
                    // parser: 'sugarss',
                    ident: 'postcss',
                    plugins: (loader) => [
                      require('postcss-import')({ root: loader.resourcePath }),
                      require('postcss-preset-env')(),
                      require('cssnano')()
                    ]
                }
              },
              {
                loader:"sass-loader",
                options: { sourceMap: true }
              }
            ]
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src'],
                minimize:true
              }
            }
          },
          {
            test: /\.(jpg|jpeg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name:'[name].[ext]',
                  outputPath: 'img/',
                }
              }
            ]
          },
          {
            test: /\.(png|gif|webp)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name:'[name].[ext]',
                  outputPath: 'img/icon/'
                }
              }
            ]
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          }
        ]
      },
    plugins: [new HtmlWebpackPlugin({
      title:"Free range",
        template:__dirname+'/public/index.html',
        inject:'body',
        filename:'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id][hash].css"
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
          },
    })
],
    mode: 'production'
}