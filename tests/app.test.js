import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})

test('<App />', () => {
  const expected = 7000
  const wrapper = shallow(<App />)
})