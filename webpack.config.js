const webpack = require('webpack');
const strip = require('strip-loader');
const DEV = process.env.NODE_ENV==='development';

const wpConfig = {
  entry: './src/',
  output: {
    path:  `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devtool: DEV ? 'source-map' : null,
  devServer: {
    contentBase: "public",
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: /\.s?css/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/
      }
    ]
  }
};

if(!DEV){
  wpConfig.module.loaders.push({
    test: /\.js/,
    exclude: /node_modules/,
    loader: strip.loader('console.log')
  });
  wpConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  );
} else {
  wpConfig.module.loaders[0].query.presets.push('react-hmre')
}

module.exports = wpConfig;