module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
  
      loaders: [
        // This applies the loader to all of your dependencies,
        // and not any of the source files in your project:
        {
          test: /node_modules/,
          loader: 'ify-loader'
        }
      ]
    
      // Important: return the modified config
      return config
    },
  }