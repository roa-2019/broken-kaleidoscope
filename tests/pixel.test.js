import React from 'react'
import {shallow, mount} from 'enzyme'

import App from '../client/components/App'
import Pixels from'../client/components/Pixels'
import { exportAllDeclaration } from '@babel/types';

describe('<Pixels />', () => {
    test('Pixel width is 50px', () => {
        let wrapper = shallow(<Pixels/>)
        let div = wrapper.find('div')
        console.log(div.prop('style'))
        expect(div.prop('style').width).toBe('50px')
    })
    test('on click color changes', () => {
        let wrapper = shallow(<Pixels/>)
        let div = wrapper.find('div')
        let color1 = div.prop('style').backgroundColor
        div.simulate('mouseEnter')
        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).not.toEqual(color1)
    })
    
})