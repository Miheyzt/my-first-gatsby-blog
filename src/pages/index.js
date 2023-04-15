import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello world from Mishazt.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage