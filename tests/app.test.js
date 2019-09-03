import React from 'react'
import {shallow, mount} from 'enzyme'

import App from '../client/components/App'
import Pixels from'../client/components/Pixels'

describe ('App', () => {
  test('Are there 200 pixels', () => {
    const wrapper = shallow(<App />)
    let pixels = wrapper.find(Pixels)
    expect(pixels.length).toBe(200)
  })
  test('are pixel in an array', () => {
    const wrapper = shallow(<App />)
    let pixels = wrapper.find(Pixels)
    expect(typeof(pixels)).toBe('object')
  })
})
