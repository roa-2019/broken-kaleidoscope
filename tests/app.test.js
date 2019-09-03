import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'

test('<App />', () => {
  const wrapper = shallow(<App/>)
  console.log(wrapper.text())
  let pixels = wrapper.find(Pixel)
  expect(pixels.length).toBe(10)
})