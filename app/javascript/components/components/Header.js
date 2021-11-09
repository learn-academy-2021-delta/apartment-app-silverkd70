import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import aptLogo from '../assets/apt-logo.png'
import { Button } from 'reactstrap'


class Header extends Component {
  render() {
      const { 
          logged_in, current_user, new_user_route, sign_in_route, sign_out_route 
        } = this.props
    return(
        <header>
             <img src={aptLogo} alt="Apartment logo" className="apt-logo"/>
            <div className="nav-links">
                <ul>
                    <NavLink to="/">
                    <button type="button" class="btn-sm">Home</button>
                    </NavLink>
                </ul>
            
                <ul>
                    <NavLink to="/apartIndex">
                    <button type="button" class="btn-sm">APARTment Listings</button>
                    </NavLink>
                </ul>
                <ul>
                {logged_in &&
                    <NavLink to="aptNew">
                    <button type="button" class="btn-sm">Add a new APARTment Listing</button>
                    </NavLink>
                }
                </ul>
            </div>
            
                {!logged_in &&
                 <div>
                    <ul>  
                        <a href={new_user_route}>
                        <button type="button" class="btn-secondary">Get Signed Up</button>
                        </a>
                    </ul>
                    <ul>
                        <a href={sign_in_route}>
                        <button type="button" class="btn-secondary">Sign In</button>
                        </a>
                    </ul> 
                 </div>
                }

                {logged_in &&
                    <ul>
                        <a href={sign_out_route}>
                        <button type="button" class="btn-sm">Sign Out</button>
                        </a>
                    </ul>
                    
                }
            
        </header>
    )
  }
}

export default Header