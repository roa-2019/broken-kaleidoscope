import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'

import { isTSAnyKeyword } from '@babel/types';

test.skip('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})

describe('<Pixel />', () => {
  it('renders 7000 <Pixel Components />', () => {
    const wrapper = shallow(<App />)
  
    console.log(wrapper.text)
    let pixel = wrapper.find("Pixel" ).length


      expect(pixel).toBe(7000)
  })
});