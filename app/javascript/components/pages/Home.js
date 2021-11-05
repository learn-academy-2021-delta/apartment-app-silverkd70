import React, { Component } from "react"
import aptBody from '../assets/apt-body.jpeg'

class Home extends Component {
  render() {
    return(
        <>
      <h3>Welcome to the APARTment finder!</h3>
      <h5>Let our APARTment search tool help you find your next home.</h5>
      <img src={aptBody} alt="Apartment layout" className="apt-body"/>
        </>
    )
  }
}

export default Home