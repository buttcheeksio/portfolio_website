import React, { Component } from 'react'
// import YouTube from 'react-youtube'

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='section' id='about-me'>About Me</div>
        <div className='section' id='projects'>Projects
          <span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Xk5S1pjb85E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5Sg7pWVSm8c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BqVse5fqe3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </span>
        </div>
        <div className='section' id='resume'>Resume</div>
        <div className='section' id='contact'>Contact</div>
      </div>
    )
  } // end of render()
} // end of Home

export default Home
