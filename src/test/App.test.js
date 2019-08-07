import React from 'react';
import {shallow} from 'enzyme'
import {App} from '../App';
import TableViewer from '../TableViewer'

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
  it('renders the TableViewer', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(<TableViewer/>))
  })
})
