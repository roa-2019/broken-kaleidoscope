import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  console.log(wrapper)
  expect(wrapper.text()).toBe(expected)
})
