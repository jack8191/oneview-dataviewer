import React, {Component} from 'react';
import {connect} from 'react-redux'
import TableViewer from './TableViewer'

export class App extends Component {
  render () {
  return (
    <div className="App">
      <TableViewer data={this.props.data}/>
    </div>
  );
  }
}


const mapStatetoProps = state => ({
  data: state.data
})

export default connect(mapStatetoProps)(App);
