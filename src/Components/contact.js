import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className='section'>
        <Grid className='grid'>
          <Cell col={6} className="contact-block">contact me</Cell>
          <Cell col={6} className="contact-block">keep reading</Cell>
        </Grid>
      </div>
    )
  } // end of resume()
} // end of Contact

export default Contact
