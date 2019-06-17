import React, { Component } from 'react'


let arrayOfText = [
  "my name is john miles martinez",
  "i am a software engineer",
  "with a focus on full-stack web development",
  "using react.js, redux, javascript, ruby on rails, and more",
  "my coding tenets:",
  "fast, efficient, and powerful code",
  "responsive layouts",
  "intuitive user experiences",
  "dynamic is better than static"
]

let text = "my name is john miles martinez"
let index = 0

// Typewriting effect

class AboutMe extends Component {

  printText = () => {

    if (this.props.state.eyeClicked) {
        let typeWriter = setInterval(function() {
          document.querySelector("h1").textContent += text[index]

          index += 1

          if (index > text.length -1) {
            clearInterval(typeWriter)
          }
        }, 120)
    } // end of if
  } // end of printText()

  render() {
    return (
      <div className='section'>
        <h1>my name is john miles martinez</h1>
        <h1>i am a react-focused </h1>


      </div>
    )
  } // end of render()
} // end of AboutMe

export default AboutMe
