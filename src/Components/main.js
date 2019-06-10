import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Welcome from './welcome'
import LandingPage from './landingpage'
import Home from './home'
import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'


class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume">
          <Resume data={this.props.resume} />
        </Route>
        <Route path="/contact" component={Contact} />
      </Switch>
    )
  } // end of render()
} // end of Main

export default Main
