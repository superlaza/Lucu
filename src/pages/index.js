import * as React from "react"

import '../styles/main.scss';

import Layout from '../components/layout';
import Header from '../components/header';
import Logo from '../components/_common/logo';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <Logo/>
      </main>
    </Layout>
  )
}

export default IndexPage
