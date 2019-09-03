import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'


describe('<App />', () => {
  test("renders 10000 pixels", () => {
    const wrapper = shallow(<App />)
    let pixels = wrapper.find(Pixel)
    expect(pixels.length).toBe(10000)
  })
  test("returns an object", () => {
    const wrapper = shallow(<App />)
    expect (typeof wrapper).toBe('object')
  })
})

