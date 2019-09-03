import React from 'react'
import {shallow} from 'enzyme'

import Pixel from '../client/components/Pixel'
import { exportAllDeclaration } from '@babel/types';

describe('<Pixel />', () => {
  test("is 5px high", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    expect(div.prop('style').height).toBe("5px")
  })
  test("changes to white on double click", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    div.simulate('doubleClick')
    div = wrapper.find('div')
    expect(div.prop('style').backgroundColor).toBe('White')
  })
  test("changes to green on mouse over", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    div.simulate('mouseEnter')
    div = wrapper.find('div')
    expect(div.prop('style').backgroundColor).toBe('ForestGreen')
  })
  test("changes to black on right click", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    div.simulate('contextMenu', {preventDefault: () => {}})
    div = wrapper.find('div')
    expect(div.prop('style').backgroundColor).toBe('Black')
  })
})
