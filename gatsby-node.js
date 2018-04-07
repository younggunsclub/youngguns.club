/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.modifyWebpackConfig = ({ config }) => {
  const srcDir = path.resolve(config._config.context, 'src')
  const cfg = {
    resolve: {
      root: srcDir
    }
  }

  return config.merge(cfg)
}
