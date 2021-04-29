import * as React from "react"

import '../styles/main.scss';

import Layout from '../components/layout';
import Header from '../components/header';

import MarketingIcon from '../images/service/marketing.svg';
import ConnectIcon from '../images/service/connect.svg';
import PatternsIcon from '../images/service/patterns.svg';
import InsightIcon from '../images/service/insight.svg';
import GearsIcon from '../images/service/gears.svg';

import FlameCandle from '../images/flamecandle.svg';

import Gears from '../images/gears.svg'
import Money from '../images/money.svg'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>

        <section>

          <div className='hero-container'>

            <div className='hero-img-container'>
              <FlameCandle className='hero-img'/>
            </div>

            {/* <div className='hero-box-container'>
              <div className='hero-box'>
              </div>
            </div> */}

            <div className='hero-content'>
              <div className='tagline1'>
                <Gears className='gears' />
                <div className='hero-text'>
                  Better Marketing
                </div>
              </div>

              <div className='tagline2'>
                <Money className='money'/>
                <div className='hero-text2'>
                  Higher Conversion
                </div>
              </div>
            </div>

            <form className='signup-form'>
              <div className='form-input'>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Name"/>
              </div>
              <div className='form-input'>
                <label for="company">Company:</label>
                <input type="text" id="company" name="company" placeholder="Company"/>
              </div>
              <div className='form-input'>
                <label for="company">Mobile #:</label>
                <input type="text" id="mobile" name="mobile" placeholder="Mobile"/>
              </div>

              <button>Submit</button>
            </form>
          
          </div>

        </section>

        

        {/* <div>
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
        </div> */}

      </main>
    </Layout>
  )
}

export default IndexPage
