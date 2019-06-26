import React, { Component } from 'react'

import { Grid, Cell } from 'react-mdl'

class Projects extends Component {
  render() {
    return (
      <div className='section'>
        <h1>Here are some of my projects</h1>

          <div id="projects">
  					<div class="inner">
  						<div class="thumbnails">

  							<div class="box">
  								<a href="https://youtu.be/Xk5S1pjb85E" class="image fit"><img src="images/foodbible.png" alt="" /></a>
  								<div class="inner">
  									<h3>The Food Bible</h3>
  									<p>Single-Page recipe and ingredient management app. Users can search through and create recipes and fill a ‘pantry’ with ingredients they have available at home. Recipes will then show how many ingredients the user is missing for that recipe.</p>
  									<a href="https://youtu.be/Xk5S1pjb85E" class="button fit" data-poptrox="youtube,800x400">Watch</a>
  								</div>
  							</div>

  							<div class="box">
  								<a href="https://youtu.be/5Sg7pWVSm8c" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
  								<div class="inner">
  									<h3>WePlan</h3>
  									<p>Single-page event coordinating app for groups of friends. Users can create groups with other users, and within those groups users can create, edit and delete events, as well as leave comments for one another.</p>
  									<a href="https://youtu.be/5Sg7pWVSm8c" class="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
  								</div>
  							</div>

  							<div class="box">
  								<a href="https://youtu.be/BqVse5fqe3g" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
  								<div class="inner">
  									<h3>Flocky</h3>
  									<p>This version of Snake has the player collecting rubber ducklings as they fight for the high score. It has an optional two-player mode, persistent high score and dynamically changing backgrounds linked to the weather.</p>
  									<a href="https://youtu.be/BqVse5fqe3g" class="button style3 fit" data-poptrox="youtube,800x400">Watch</a>
  								</div>
  							</div>
  						</div>

  					</div>
  				</div>
      </div>
    )
  } // end of render()
} // end of Projects

export default Projects
