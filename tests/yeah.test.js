import React from 'react'
import { shallow } from 'enzyme'

import YeahBuddy from '../client/components/YeahBuddy'


describe('<YeahBuddy />', () => {
    test('is 20 px wide', () => {
        let wrapper = shallow(<YeahBuddy />)
        let div = wrapper.find('div')
        expect(div.prop('style').width).toBe(20)
    })
})