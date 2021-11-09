import React, { Component } from "react"
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import ApartIndex from './pages/ApartIndex'
import PropTypes from "prop-types"

import {
  BrowserRouter as  Router,
  Routes,
  Route
} from "react-router-dom"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  componentDidMount(){
    this.readApartment()
  }
  readApartment = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(apartmentsArray => this.setState({apartments: apartmentsArray}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }
  render () {
    const { apartments } = this.state
    return (
      <div>
      <Router>
        <Header {...this.props} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ApartIndex" element={<ApartIndex apartments={apartments} />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App
