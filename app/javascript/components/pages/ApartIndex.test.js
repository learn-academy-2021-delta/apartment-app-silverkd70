import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartIndex from './ApartIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When index renders", () => {
  it("displays a header", () => {
    const indexHeading = shallow(<ApartIndex />).find("h3")
    expect(indexHeading.text()).toEqual("The APARTments List")
  })
})
