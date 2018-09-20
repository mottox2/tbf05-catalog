import React from 'react'
import { graphql } from 'gatsby'

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
      return <div style={{ marginBottom: 12 }}>
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
    })}
  </Layout>
)


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
      }
    }
  }
}
`

export default IndexPage
