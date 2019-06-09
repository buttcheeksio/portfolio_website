import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Welcome from './welcome'
import LandingPage from './landingpage'
import Resume from './resume'
import Projects from './projects'
import AboutMe from './aboutme'
import Contact from './contact'


class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/resume">
          <Resume data={this.props.resume} />
        </Route>
        <Route path="/projects" component={Projects} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
      </Switch>
    )
  } // end of render()
} // end of Main

export default Main
