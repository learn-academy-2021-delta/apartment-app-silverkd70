import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardTitle, Col } from 'reactstrap'

class ApartIndex extends Component {
  render() {
    return (
    <div className="page-body">
        <h3>I Am The APARTment Index</h3>
        <br />
            <Col sm="6">
                {this.props.apts.map(apt => {
                    return (
                        <Card body key={apt.id}>
                            <CardTitle>
                                <ol>Location</ol>
                                    <ol>{apt.street}</ol>
                                    <ol>{apt.city}</ol>
                                    <ol>{apt.state}</ol>
                                <ul>Manager</ul>
                                    <li>{apt.manager}</li>
                                    <li>{apt.email}</li>
                            </CardTitle>
                        </Card>
                     )
                })}
            </Col>
    </div>
    )
  }
}
export default ApartIndex