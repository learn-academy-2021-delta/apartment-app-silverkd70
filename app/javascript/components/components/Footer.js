import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class Footer extends Component {
  render() {
    return(
        <footer>
        
          <NavLink to="/">
            <Button>Back to Home Page</Button>
          </NavLink>
          <br />
          <h6>&copy;2021 Let's Live APART</h6>
        
      </footer>
    )
  }
}
      

export default Footer