import React from 'react'

import {shallow, mount} from 'enzyme'
import Message from '../components/Message'

describe('<Message />', () => {
    it('renders without creashing', () => {
        shallow(<Message />)
    })
    it('renders text when the error prop have a value', () => {
        const wrapper = mount(<Message error={true} />)
        expect(wrapper.find(<p>Something went wrong. Please try again later</p>))
    })
    it('renders text when the submitting prop has a value', () => {
        const wrapper = mount(<Message error={false} submitting={true}/>)
        expect(wrapper.find(<p>Working...</p>))
    })
})