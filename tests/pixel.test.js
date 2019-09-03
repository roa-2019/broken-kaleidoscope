import React from 'react';
import { shallow } from 'enzyme';

import Pixel from '../client/components/Pixel';

describe('<Pixel />', () => {
    test("onClick event changes div to a different colour", () => {
        let wrapper = shallow(<Pixel />)
        let div = wrapper.find('div')
        let firstColor = div.prop('style').backgroundColor
        div.simulate('click')                                                                                      
        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).not.toEqual(firstColor)
    })
    test("onMouseEnter event changes div to a different colour", () => {
        let wrapper = shallow(<Pixel />)
        let div = wrapper.find('div')
        let firstColor = div.prop('style').backgroundColor
        div.simulate('mouseEnter')

        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).not.toEqual(firstColor)
    })
    test("onContextMenu event changes div to black", () => {
        let wrapper = shallow(<Pixel />)
        let div = wrapper.find('div')
        div.simulate('contextMenu', {preventDefault: () => {}})

        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).toBe('black')

    })
})
 