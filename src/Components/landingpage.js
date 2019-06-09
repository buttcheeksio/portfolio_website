import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'

import Main from './main'


class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
        <Layout>
          <Header transparent className='navbar' title='John Martinez'>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content className='content'>
            <Main resume={this.props.appState.resume}/>
          </Content>
          <Footer size="mini">
            <FooterSection type="left" logo="John Martinez">
              <FooterLinkList>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default LandingPage
