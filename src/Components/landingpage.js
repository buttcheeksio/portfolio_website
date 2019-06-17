import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'

import Main from './main'
import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'

let pupil = document.getElementsByClassName("pupil-small")
let eye = document.getElementsByClassName("eye-small")

let aboutme = document.getElementById("aboutme")

let resumeURL = 'https://drive.google.com/file/d/13lrw6QyY4fEzIPSBPp4JhG1glUI3moSB/view?usp=sharing'

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
} // end of scrollTo()


class LandingPage extends Component {


  render() {
    return (
      <div
        className='landing-page'
        onMouseMove={(event) => this.props.movePupil(event, pupil[0])}>

        <div className='eye-container'>
          <div className='eye-small'>
            <div className='pupil-small' />
          </div>
        </div>

        <Layout className='layout'>
          <Header className='navbar' transparent title=" ">
              <Navigation>
                  <a  onClick={() => scrollTo(document.body, aboutme.offsetTop, 600)}>About Me</a>
                  <a data-scroll href="#projects">Projects</a>
                  <a href={resumeURL} target="_blank">Resume</a>
                  <a data-scroll href='#contact'>Contact</a>
              </Navigation>
          </Header>

          <Content id='content'>
            <h2>John Martinez</h2>

            <AboutMe id='aboutme' />
            <Projects id='projects' />
            <Contact id='contact' />
          </Content>


        </Layout>
      </div>
    )
  } // end of render()
} // end of LandingPage



export default LandingPage
