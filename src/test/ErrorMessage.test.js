import React from 'react'

import {shallow, mount} from 'enzyme'
import ErrorMessage from '../components/ErrorMessage'

describe('<ErrorMessage />', () => {
    it('renders without creashing', () => {
        shallow(<ErrorMessage />)
    })
    it('renders text when the props have a value', () => {
        const wrapper = mount(<ErrorMessage error={true} />)
        expect(wrapper.find(<p>Something went wrong. Please try again later</p>))
    })
})