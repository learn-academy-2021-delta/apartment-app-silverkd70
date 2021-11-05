import React, { Component } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./pages/Home"
import PropTypes from "prop-types"

import {
  BrowserRouter as  Router,
  Routes,
  Route
} from "react-router-dom"


class App extends Component {
  render () {
    return (
      <div>
      <Router>
        <Header {...this.props} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={<Header />} />
          <Route exact path="/" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App
