import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout>
    {props.data.allProduct.edges.map((product) => {
      return <div style={{ marginBottom: 12 }}>
        <div>{product.node.name}</div>
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
