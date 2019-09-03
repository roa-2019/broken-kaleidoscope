import React from 'react'
import {shallow} from 'enzyme'

import Pixel from '../client/components/Pixel'

describe('<Pixel />', () => {
  test("has width 5px (using prop())", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    expect(div.prop('style').width).toBe("5px")
  })
  test("changes style on click", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    let oldColor = div.prop('style').backgroundColor
    div.simulate('mouseOver')
    div = wrapper.find('div') // need to call find again to get the new div
    expect(div.prop('style').backgroundColor).not.toEqual(oldColor)
  })
})