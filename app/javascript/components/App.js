import React, { Component } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartIndex from './pages/ApartIndex'
import mockAparts from './mockAparts.js'
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
      apts: mockAparts
    }
  }
  render () {
    return (
      <div>
      <Router>
        <Header {...this.props} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={<Header />} />
          <Route path="/apartindex" element={<ApartIndex apts={this.state.apts} />} />
          <Route exact path="/" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App
