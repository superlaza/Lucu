import * as React from "react"

import '../styles/main.scss';

import Layout from '../components/layout';
import Header from '../components/header';

import MarketingIcon from '../images/service/marketing.svg'
import ConnectIcon from '../images/service/connect.svg'
import PatternsIcon from '../images/service/patterns.svg'
import InsightIcon from '../images/service/insight.svg'
import GearsIcon from '../images/service/gears.svg'


// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>

        <div>
          <img class="service-icon" src={MarketingIcon}/>
          <span class="service-header">Marketing</span>
        </div>

        <div>
          <img class="service-icon" src={ConnectIcon}/>
          <span class="service-header">Connect with your customers</span>
        </div>

        <div>
          <img class="service-icon" src={PatternsIcon}/>
          <span class="service-header">Discover patterns</span>
        </div>

        <div>
          <img class="service-icon" src={InsightIcon}/>
          <span class="service-header">Gain insights</span>
        </div>

        <div>
          <img class="service-icon" src={GearsIcon}/>
          <span class="service-header">Automate</span>
        </div>

      </main>
    </Layout>
  )
}

export default IndexPage
