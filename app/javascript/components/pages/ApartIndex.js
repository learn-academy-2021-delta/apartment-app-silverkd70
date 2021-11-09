import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'




class ApartIndex extends Component {
  render() {
      const { apartments } = this.props
    return (
    <div className="page-body">
        <h3>The APARTments List</h3>
        <br />
            <Col sm="6">
                {apartments && apartments.map(apartment => {
                    return (
                        <Card body key={apartment.id} className="card-body">
                            <CardTitle>
                                <ol>Location</ol>
                                    <ol>{apartment.street}</ol>
                                    <ol>{apartment.city}, {apartment.state}</ol>
                                    
                                <ul>Manager</ul>
                                    <ol>{apartment.manager}</ol>
                                    <li>{apartment.email}</li>
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