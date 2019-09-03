import React from 'react'
import {shallow} from 'enzyme'

import Pixel from '../client/components/Pixel'

describe('<Pixel />', () => {
  test('each pixel is 20px wide / high', () => {

    const expected = '20px'
    const wrapper = shallow(<Pixel />)

    let div = wrapper.find('div')

    expect(div.prop('style').width).toBe(expected)
    expect(div.prop('style').height).toBe(expected)

  })


  test('color changes when pixel is pressed', () => {

    const wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    let oldColor = div.prop('style').backgroundColor
    div.simulate('click')
    div = wrapper.find('div')
    let newColor = div.prop('style').backgroundColor
    expect(oldColor).not.toBe(newColor)
  })
})