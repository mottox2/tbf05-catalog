/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const axios = require('axios')
const crypto = require('crypto') 

exports.sourceNodes = async ({ actions }, { accessToken, teamName, q = '' }) => {
  const createNodeFromProduct = product => {
    const hashId = crypto
      .createHash(`md5`)
      .update(product.id.toString())
      .digest('hex')
    const baseNode = {
      id: hashId,
      children: [],
      parent: `__SOURCE__`,
      internal: {
        type: 'Product',
        contentDigest: hashId
      }
    }

    actions.createNode(Object.assign({}, baseNode, product))
  }

  const { data } = await axios.get(process.env.API_URL)
  data.forEach(product => createNodeFromProduct(product))
  return
}
