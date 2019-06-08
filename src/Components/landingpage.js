import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'

import Main from './main'

class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
        <Layout fixedHeader>
          <Header className='header-color' title='John Martinez'>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <Main />
          </Content>
          <Footer size="mini">
            <FooterSection type="left" logo="John Miles Martinez">
              <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default LandingPage
