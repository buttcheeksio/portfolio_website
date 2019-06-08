import React, { Component } from 'react'

let landingPage = document.getElementsByClassName("landing-page")
let welcomePage = document.getElementsByClassName("welcome-page")
let pupil = document.getElementsByClassName("pupil")
let eye = document.getElementsByClassName("eye")
document.onmousemove = function(event) {
  /*
  event.clientX/Y => gets the horizontal/vertical coordinate of the onmousemove
  window.innerWidth/Height => gets the browser width/height
  */
  let x = event.clientX * 100 / window.innerWidth + "%"
  let y = event.clientY * 100 / window.innerHeight + "%"

  pupil[0].style.left = x
  pupil[0].style.top = y
  pupil[0].style.transform = "translate(-"+x+", -"+y+")"
}

function hideWelcomePage() {
  welcomePage[0].style.visibility = "hidden"
  landingPage[0].style.visibility = "visible"
}

class Welcome extends Component {

  pupilClick() {
    pupil[0].style.width = "1000em"
    pupil[0].style.height = "1000em"

    setTimeout(hideWelcomePage, 3000)
  }


  render() {
    return (
      <div className='welcome-page'>
        <div className="move-area">
          <div className='container'>
            <div className='eye' id='not-hovered'>
              <div
                className='pupil'
                id='not-clicked'
                onClick={() => this.pupilClick()} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
