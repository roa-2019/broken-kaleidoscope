import React from 'react'
import { shallow } from 'enzyme'

import Pixel from '../client/components/Pixel'

describe('<Pixel />', () => {
  test("is 20 px wide (using prop())", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    expect(div.prop('style').width).toBe(15)
  })
  test("changes style on click", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    let oldColor = div.prop('style').backgroundColor
    div.simulate('click')
    div = wrapper.find('div') // need to call find again to get the new div
    expect(div.prop('style').backgroundColor).not.toEqual(oldColor)
  })
})
