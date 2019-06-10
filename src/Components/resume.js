import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Resume extends Component {
  render() {
    return (
      <div className='resume-container'>
        <h2 id='name'>John Martinez</h2>
        <div id='contact-info'>
          <span>
            <a href='6469152711'>646-915-2711</a> |
            <a href='mailto:jmartinez729@gmail.com'>jmartinez729@gmail.com</a> |
            <a href='https://github.com/jmartinez729'>GitHub</a> |
            <a href='https://medium.com/@jmartinez729'>Medium</a> |
            <a href='https://www.linkedin.com/in/jmartinez729/'>LinkedIn</a>
          </span>
        </div>
        <br />
        <p id='summary'>
          Chef turned Software Engineer with a passion for pastries, historical fencing, Godzilla movies and Japanese cuisine. I graduated from Flatiron School where we focused on full stack web development utilizing JavaScript, React, Redux and many other languages, technologies and frameworks, and I am eager and excited to continue learning. I am a former chef, current amateur baker, a historical fencing instructor with nearly six years of experience as a fencing student, and I’ve recently picked up Japanese martial arts as a way to diversify my training.
        </p>
        <h4>TECHNICAL SKILLS</h4>
        <p>
          JavaScript, SQL, RESTful API, AngularJS, HTML, CSS, React, Redux, Ruby on Rails, Single-Page Web Development, Data Structures, OO Programming, React Materialize, Material UI, Bootstrap, Responsive Web Development, Git
        </p>
        <div id='technical-projects'>
          <h4>TECHNICAL PROJECTS</h4>
          <div id='the-food-bible'>
            <span>
              <h5>The Food Bible</h5>
              <a href='https://github.com/jmartinez729/food-app-front-end'>GitHub Front-End </a> |
              <a href='https://github.com/jmartinez729/food-app-back-end'> GitHub Back-End </a> |
              <a href='https://youtu.be/Xk5S1pjb85E'> YouTube Demo</a>
            </span>
            <p>Single-Page recipe and ingredient management app. Users can search through and create recipes and fill a ‘pantry’ with ingredients they have available at home. Recipes will then show how many ingredients the user is missing for that recipe.</p>
            <ul id='bullet-points'>
              <li>+ Employed JavaScript, Redux, and React on the front-end to simplify and organize data flow</li>
              <li>+ Designed UI using React Materialize and custom CSS to allow clean, functional forms</li>
              <li>+ Constructed back-end with Rails and a serializer to simplify data and reduce fetches</li>
              <li>+ Implemented declarative routing with React Router to allow single-page functionality without a page refresh</li>
            </ul>
          </div>
          <div id='weplan'>
            <span>
              <h5>WePlan</h5>
              <a href='https://github.com/jmartinez729/group-planner-frontend'>GitHub Front-End</a> |
              <a href='https://github.com/jmartinez729/group-planner-backend'>GitHub Back-End</a> |
              <a href='https://youtu.be/5Sg7pWVSm8c'>YouTube Demo</a>
            </span>
            <p>Single-page event coordinating app for groups of friends. Users can create groups with other users and within those groups users can create, edit and delete events, as well as leave comments for one another.</p>
            <ul id='bullet-points'>
              <li>+ Utilized JavaScript and React to simplify front-end construction via the component lifecycle</li>
              <li>+ Designed UI using React Materialize for compatibility with React</li>
              <li>+ Composed back-end with Rails utilizing a serializer to allow the app to operate with a single fetch on user login</li>
            </ul>
          </div>
          <div id='flocky'>
            <span>
              <h5>Flocky</h5>
              <a href='https://github.com/jmartinez729/snake-api'>GitHub</a> |
              <a href='https://youtu.be/BqVse5fqe3g'>YouTube Demo</a>
            </span>
            <p>This version of Snake has the player collecting rubber ducklings as they fight for the high score. It has an optional two-player mode, persistent high score and dynamically changing backgrounds linked to the weather.</p>
            <ul id='bullet-points'>
              <li>+ Implemented HTML Canvas for graphical and UI elements</li>
              <li>+ Created back-end with Rails to persist the top 8 player names and high scores</li>
              <li>+ Custom vector-based physics and collision detection written in JavaScript</li>
              <li>+ Connects with a weather API to dynamically change the background based on current weather conditions in London</li>
            </ul>
          </div>
        </div>
        <div id='education'>
          <h4>EDUCATION</h4>
          <div id='flatiron-school'>
            <span>
              <h5>Flatiron School</h5>
              <p>New York, NY</p>
              <p>2019</p>
            </span>
            <ul>
              <li>+ Full-Stack Web Development, JavaScript an Ruby on Rails Immersive Program</li>
            </ul>
          </div>
          <div id='city-college-of-new-york'>
            <span>
              <h5>City College of New York</h5>
              <p>New York, NY</p>
              <p>2013 - 2015</p>
            </span>
            <ul>
              <li>+ Completed coursework in Applied Physics (Optics and Photonics)</li>
            </ul>
          </div>
        </div>
        <div id='employment-history'>
          <h4>EMPLOYMENT HISTORY</h4>
          <div id='miramom'>
            <span>
              <h5>Miramom</h5>
              <p>New York, NY</p>
            </span>
            <span>
              <p>Front-End Developer Intern</p>
              <p>June 2019 - Present</p>
            </span>
            <ul>
              <li>+ Front-end development with ReactJS and JavaScript</li>
            </ul>
          </div>
          <div id='sullivan-and-cromwell'>
            <span>
              <h5>Sullivan & Cromwell, LLP</h5>
              <p>New York, NY</p>
            </span>
            <span>
              <p>Legal Secretary</p>
              <p>April 2017 - October 2018</p>
            </span>
            <ul>
              <li>+ Helmed pilot program designed to decrease workload of over-burdened secretaries</li>
              <li>+ Trained and mentored junior legal secretaries</li>
            </ul>
          </div>
          <div id='chikarashi'>
            <span>
              <h5>Chikarashi</h5>
              <p>New York, NY</p>
            </span>
            <span>
              <p>Chef de Partie</p>
              <p>August 2016 - April 2017</p>
            </span>
            <ul>
              <li>+ Recruited and conducted onboarding training for 65% of staff</li>
              <li>+ Supervised four employees to maintain kitchen and safety standards</li>
              <li>+ Decreased time spent per order by approx. 70% through establishing new organizational standards</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
