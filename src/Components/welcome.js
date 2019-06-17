import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'

import Main from './main'
import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'

let landingPage = document.getElementsByClassName("landing-page")
let welcomePage = document.getElementsByClassName("welcome-page")
let pupil = document.getElementsByClassName("pupil")
let eye = document.getElementsByClassName("eye")
let layout = document.getElementsByClassName("layout")

let resumeURL = 'https://drive.google.com/file/d/13lrw6QyY4fEzIPSBPp4JhG1glUI3moSB/view?usp=sharing'

class Welcome extends Component {
  render() {
    return (
      <div
        className='welcome-page'
        onMouseMove={(event) => this.props.movePupil(event, pupil[0])}>

        <div className='eye-container'>
          <div className='eye'>
            <div
              className='pupil'
              onClick={() => this.props.eyeClick(eye[0], pupil[0], layout[0])} />
          </div>
        </div>

        <Layout className='layout'>
          <Header className='navbar' transparent title="john miles martinez">
              <Navigation>
                  <a href='#aboutme'>About Me</a>
                  <a href='#projects'>Projects</a>
                  <a href={resumeURL} target='_blank'>Resume</a>
                  <a href='#contact'>Contact</a>
              </Navigation>
          </Header>

          <Content id='content'>
            <AboutMe id='aboutme' state={this.props.state} />
            <Projects id='projects' />
            <Contact id='contact' />
          </Content>

          <Footer transparent size="mini">
            <FooterSection  type="left" logo="john miles martinez">
                <FooterLinkList>
                    <a href="#">GitHub</a>
                    <a href="#">Medium</a>
                    <a href="#">LinkedIn</a>
                </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    )
  } // end of render()
} // end of Welcome

export default Welcome
