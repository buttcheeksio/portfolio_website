import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'

import Main from './Components/main'

import Welcome from './Components/welcome'
import LandingPage from './Components/landingpage'


class App extends Component {
  state = {
    stopEyeMovement: false,
    eyeClicked: false,
    resume: {
      name: 'John Martinez',
      contactInfo: [
        {
          phoneNumber: '646-915-2711',
          email: 'jmartinez729@gmail.com',
          gitHub: 'https://github.com/jmartinez729',
          medium: 'https://medium.com/@jmartinez729',
          linkedIn: 'https://www.linkedin.com/in/jmartinez729/'
        },
      ],
      summary: 'Chef turned Software Engineer with a passion for pastries, historical fencing, Godzilla movies and Japanese cuisine. I graduated from Flatiron School where we focused on full stack web development utilizing JavaScript, React, Redux and many other languages, technologies and frameworks, and I am eager and excited to continue learning. I am a former chef, current amateur baker, a historical fencing instructor with nearly six years of experience as a fencing student, and I’ve recently picked up Japanese martial arts as a way to diversify my training.',
      technicalSkills: ['JavaScript', 'SQL', 'RESTful API', 'AngularJS', 'HTML', 'CSS', 'React', 'Redux', 'Ruby on Rails', 'Single-Page Web Development', 'Data Structures', 'OO Programming', 'React Materialize', 'Material UI', 'Bootstrap', 'Responsive Web Development', 'Git'],
      technicalProjects: [
        {
          name: 'The Food Bible',
          links: [
            {
              name: 'GitHub Front-End',
              link: 'https://github.com/jmartinez729/food-app-front-end'
            },
            {
              name: 'GitHub Back-End',
              link: 'https://github.com/jmartinez729/food-app-back-end'
            },
            {
              name: 'YouTube Demo',
              link: 'https://youtu.be/Xk5S1pjb85E'
            }
          ],
          description: 'Single-Page recipe and ingredient management app. Users can search through and create recipes and fill a ‘pantry’ with ingredients they have available at home. Recipes will then show how many ingredients the user is missing for that recipe.',
          bulletPoints: [
            'Employed JavaScript, Redux, and React on the front-end to simplify and organize data flow',
            'Designed UI using React Materialize and custom CSS to allow clean, functional forms',
            'Constructed back-end with Rails and a serializer to simplify data and reduce fetches',
            'Implemented declarative routing with React Router to allow single-page functionality without a page refresh'
          ]
        },
        {
          name: 'WePlan',
          links: [
            {
              name: 'GitHub Front-End',
              link: 'https://github.com/jmartinez729/group-planner-frontend'
            },
            {
              name: 'GitHub Back-End',
              link: 'https://github.com/jmartinez729/group-planner-backend'
            },
            {
              name: 'YouTube Demo',
              link: 'https://youtu.be/5Sg7pWVSm8c'
            }
          ],
          description: 'Single-page event coordinating app for groups of friends. Users can create groups with other users and within those groups users can create, edit and delete events, as well as leave comments for one another.',
          bulletPoints: [
            'Utilized JavaScript and React to simplify front-end construction via the component lifecycle',
            'Designed UI using React Materialize for compatibility with React',
            'Composed back-end with Rails utilizing a serializer to allow the app to function with a single fetch on user login'
          ]
        },
        {
          name: 'Flocky',
          links: [
            {
              name: 'GitHub',
              link: 'https://github.com/jmartinez729/snake-api'
            },
            {
              name: 'YouTube Demo',
              link: 'https://youtu.be/BqVse5fqe3g'
            }
          ],
          description: 'This version of Snake has the player collecting rubber ducklings as they fight for the high score. It has an optional two-player mode, persistent high score and dynamically changing backgrounds linked to the weather.',
          bulletPoints: [
            'Implemented HTML Canvas for graphical and UI elements',
            'Created back-end with Rails to persist the top 8 player names and high scores',
            'Custom vector-based physics and collision detection written in JavaScript',
            'Connects with a weather API to dynamically change the background based on current weather conditions in London'
          ]
        }
      ], // end of technicalProjects
      education: [
        {
          school: 'Flatiron School',
          location: 'New York, NY',
          year: '2019',
          info: 'Full-Stack Web Development, JavaScript an Ruby on Rails Immersive Program'
        },
        {
          school: 'City College of New York',
          location: 'New York, NY',
          year: '2013 - 2015',
          info: 'Completed coursework in Applied Physics (Optics and Photonics)'
        }
      ], // end of education
      employmentHistory: [
        {
          name: 'Miramom',
          location: 'New York, NY',
          title: 'Front-End Developer Intern',
          dates: 'June 2019 - Present',
          bulletPoints: [
            'Front-end development with ReactJS and JavaScript'
          ]
        },
        {
          name: 'Sullivan & Cromwell, LLP',
          location: 'New York, NY',
          title: 'Legal Secretary',
          dates: 'April 2017 - October 2018',
          bulletPoints: [
            'Helmed pilot program designed to decrease workload of over-burdened secretaries',
            'Trained and mentored junior legal secretaries'
          ]
        },
        {
          name: 'Chikarashi',
          location: 'New York, NY',
          title: 'Chef de Partie',
          dates: 'August 2016 - April 2017',
          bulletPoints: [
            'Recruited and conducted onboarding training for 65% of staff',
            'Supervised four employees to maintain kitchen and safety standards',
            'Decreased time spent per order by approx. 70% through establishing new organizational standards'
          ]
        },
      ], // end of employmentHistory
    }, // end of resume
    index: ""
  } // end of state

  renderLandingPageOrWelcome = () => {
    if (this.state.eyeClicked) {
      return (
        <LandingPage
          state={this.state}
          movePupil={this.movePupil} />
      )
    } else {
      return (
        <Welcome
          state={this.state}
          eyeClick={this.eyeClick}
          movePupil={this.movePupil} />
      )
    }
  } // end of renderLandingPageOrWelcome()

  /***** eye functionality *****/

  eyeClick = (eye, pupil, layout) => {
    /* changes appearance of eye when clicked */
    /* utilized in welcome.js */

    eye.style.opacity = "0.25"
    eye.style.width = "120px"
    eye.style.height = "60px"
    eye.style.zIndex = "-1"

    pupil.style.width = "40px"
    pupil.style.height = "40px"
    pupil.style.zIndex = "-1"

    layout.style.opacity = "1"
    layout.style.zIndex = "1"

    setTimeout(() => {this.setState({eyeClicked: true})}, 3000)

    /*
    make it so when the eye is clicked, it changes the state to reflect
    that change. I want it to then start loading in elements from landingpage
    */
  } // end of eyeClick()

  movePupil = (event, pupil) => {
    /* event.clientX/Y gets the horizontal/vertical coordinate of the onmousemove
    window.innerWidth/Height gets the browser width/height */
    /* utilized in welcome.js */

    let x = event.clientX * 100 / window.innerWidth + "%"
    let y = event.clientY * 100 / window.innerHeight + "%"

    pupil.style.left = x
    pupil.style.top = y
    pupil.style.transform = "translate(-"+x+", -"+y+")"
  } // end of movePupil()

  /***** end of eye functionality *****/


  render() {
    return (
      <div className='app'>
        <Layout>
          <Content className='content'>
            <Welcome
              state={this.state}
              eyeClick={this.eyeClick}
              movePupil={this.movePupil} />
          </Content>
        </Layout>
      </div>
    )
  } // end of render()
} // end of App

export default App;
