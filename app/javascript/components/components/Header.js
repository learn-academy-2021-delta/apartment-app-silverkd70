import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import aptLogo from '../assets/apt-logo.png'


class Header extends Component {
  render() {
      const { 
          logged_in, current_user, new_user_route, sign_in_route, sign_out_route 
        } = this.props
    return(
        <header>
            <NavLink to="/">
             <img src={aptLogo} alt="Apartment logo" className="apt-logo"/>
            </NavLink>
            <div className="nav-links">
                <ul>
                    <li>Apartment Listings</li>
                </ul>
                {!logged_in &&
                 <>
                    <ul>  
                        <a href={new_user_route}>Get Signed Up</a>
                    </ul>
                    <ul>
                        <a href={sign_in_route}>Sign In</a>
                    </ul>
                 </>
                }

                {logged_in &&
                    <ul>
                        <a href={sign_out_route}>Sign Out</a>
                    </ul>
                }
            </div>
        </header>
    )
  }
}

export default Header