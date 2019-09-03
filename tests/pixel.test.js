import React from 'react'
import {shallow, mount} from 'enzyme'

import App from '../client/components/App'
import Pixels from'../client/components/Pixels'
import { exportAllDeclaration } from '@babel/types';
import { TestScheduler } from '@jest/core';

describe('<Pixels />', () => {
    test('Pixel width is 50px', () => {
        let wrapper = shallow(<Pixels/>)
        let div = wrapper.find('div')
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
    test('on context menu turns black', () => {
        let wrapper = shallow(<Pixels/>)
        let div = wrapper.find('div')
        div.simulate('contextMenu', {preventDefault:()=> {}})
        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).toBe('black')
    })
    test('on double click color changes to white', () => {
        let wrapper = shallow(<Pixels/>)
        let div = wrapper.find('div')
        div.simulate('doubleClick')
        div = wrapper.find('div')
        expect(div.prop('style').backgroundColor).toEqual('white')
    })
})
