import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './landingpage'
import Contact from './contact'
import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />

  </Switch>
)

export default Main
