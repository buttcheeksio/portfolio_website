import React, { Component } from 'react'

let landingPage = document.getElementsByClassName("landing-page")
let welcomePage = document.getElementsByClassName("welcome-page")
let pupil = document.getElementsByClassName("pupil")
let eye = document.getElementsByClassName("eye")


class Welcome extends Component {

  ifEyeHasNotBeenClicked = (event) => {
    if (!this.props.state.stopEyeMovement) {
      this.movePupil(event)
    }
  } // end of ifEyeHasNotBeenClicked()

  movePupil = (event) => {
    /*
    event.clientX/Y gets the horizontal/vertical coordinate of the onmousemove
    window.innerWidth/Height gets the browser width/height
    */
    let x = event.clientX * 100 / window.innerWidth + "%"
    let y = event.clientY * 100 / window.innerHeight + "%"

    pupil[0].style.left = x
    pupil[0].style.top = y
    pupil[0].style.transform = "translate(-"+x+", -"+y+")"
  } // end of movePupil()

  render() {
    return (
      <div className='welcome-page' onMouseMove={(event) => this.ifEyeHasNotBeenClicked(event)}>
        <div className='eye-container'>
          <div className='eye' id='not-hovered'>
            <div
              className='pupil'
              id='not-clicked'
              onClick={() => this.props.eyeClick(pupil[0])}
              />
          </div>
        </div>
      </div>
    )
  } // end of render()
} // end of Welcome

export default Welcome
