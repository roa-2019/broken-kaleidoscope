import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'

describe('<App />', () => {
  test("renders 1000 pixels", () => {
    const wrapper = shallow(<App />)
    let pixels = wrapper.find(Pixel)
    expect(pixels.length).toBe(1000)
  })
})
