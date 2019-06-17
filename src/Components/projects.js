import React, { Component } from 'react'

import { Grid, Cell } from 'react-mdl'

class Projects extends Component {
  render() {
    return (
      <div className='section'>
        <h1>here are some of my projects</h1>

        <Grid className='grid'>
            <Cell col={4} className="project-block">Food Bible</Cell>
            <Cell col={4} className="project-block">WePlan</Cell>
            <Cell col={4} className="project-block">Flocky</Cell>
        </Grid>

      </div>
    )
  } // end of render()
} // end of Projects

export default Projects
