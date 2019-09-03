import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'

test('<App />', () => {
  const expected = 1000
  const wrapper = shallow(<App />)
  // console.log(wrapper.text())
  const pixels = wrapper.find(Pixel) //.find can pass in component
  expect(pixels.length).toBe(expected)
})
