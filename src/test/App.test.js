import React from 'react';
import {shallow} from 'enzyme'
import {App} from '../components/App';
import TableViewer from '../components/TableViewer'
import TableViewButton from '../components/TableViewButton'
import ErrorMessage from '../components/ErrorMessage'

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
  it('renders the TableViewer', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(<TableViewer/>))
  })
  it('renders the TableViewButton', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(<TableViewButton />))
  })
  it('renders the ErrorMessage', () => {
    const wrapper = shallow(<App />)
    expect (wrapper.find(<ErrorMessage />))
  })
})
