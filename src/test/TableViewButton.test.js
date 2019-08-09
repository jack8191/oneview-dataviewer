import React from 'react'
import {shallow, mount} from 'enzyme'
import TableViewButton from '../components/TableViewButton'

describe('<TableViewButton />', () => {
    it('renders without crashing', () => {
        shallow(<TableViewButton />)
    })
    it('triggers a callback function when the table viewing button is clicked', () => {
        const callback = jest.fn()
        const wrapper = mount(<TableViewButton onClick={callback} />)
        wrapper.instance()
        wrapper.update()
        wrapper.find('button').simulate('click')
        expect(callback).toHaveBeenCalled()
      }) 
})