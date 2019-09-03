import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'

describe('<Pixel />', () => {
    test("pixel changes color when clicked", () => {
        const wrapper = shallow(<Pixel />)
        let div = wrapper.find('div')
        let oldColor = div.prop('style').backgroundColor
        div.simulate('click')
        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).not.toEqual(oldColor)
    })
    test("pixel changes to yellow with mouse drag", () => {
        const wrapper = shallow(<Pixel />)
        let div = wrapper.find('div')
        div.simulate('dragEnter')
        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).toBe('yellow')
    })
    test("pixel width is 10", () => {
        const wrapper = shallow(<Pixel />)
        let div = wrapper.find('div')
        div = wrapper.find('div')
        expect(div.prop('style').width).toEqual(10)
    })
})


