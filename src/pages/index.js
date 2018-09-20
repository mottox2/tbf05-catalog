import React from 'react'
import { graphql } from 'gatsby'
import LazyLoad from 'react-lazyload'

import Layout from '../components/layout'

const truncate = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  return str.substring(0, length) + '...';
}

const IndexPage = (props) => (
  <Layout>
    {props.data.allProduct.edges.map((product) => {
      const image = product.node.images && product.node.images[0]
      return <div key={product.id} style={{ marginBottom: 16, display: 'flex' }}>
        <div style={{ marginRight: 12 }}>
          <div style={{ fontWeight: 600 }}>{product.node.name}</div>
          <div>
            {product.node.description &&
              <small dangerouslySetInnerHTML={{
                __html: truncate(product.node.description, 200).replace('\n', '<br/>')
              }}/>
            }
          </div>
          <a style={{ fontSize: '80%' }} href={`https://techbookfest.org/event/tbf05/circle/${product.node.circle.id}`}>
            {product.node.circle.name}
          </a>
        </div>
        { image && <ProductImage image={image} alt={product.node.name} /> }
      </div>
    })}
  </Layout>
)

const ProductImage = ({ image, alt }) => {
  const height = 200 * image.height / image.width
  return <div style={{ marginLeft: 'auto' }}> 
    <LazyLoad height={200}>
      <img width={200} height={height} style={{ objectFit: 'cover', minWidth: 200 }} src={image.url} alt={alt}/>
    </LazyLoad>
  </div>
}

export const query = graphql`
query {
  allProduct {
    edges {
      node {
        id
        name
        description
        circle {
          id
          name
        }
        images {
          id
          width
          height
          url
        }
      }
    }
  }
}
`

export default IndexPage
