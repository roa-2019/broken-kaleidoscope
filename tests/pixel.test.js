import React from 'react';
import { shallow } from 'enzyme';

import Pixel from '../client/components/Pixel';

describe('<Pixel />', () => {
    test("onClick event changes div to orange", () => {
        let wrapper = shallow(<Pixel />)
        console.log(wrapper)
        let div = wrapper.find('div')
        let firstColor = div.prop('style').backgroundColor
        div.simulate('click')                                                                                      
        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).not.toEqual(firstColor)
    })
})
 