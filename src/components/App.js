import React, {Component} from 'react';
import {connect} from 'react-redux'
import TableViewer from './TableViewer.js'
import TableViewButton from './TableViewButton'
import ErrorMessage from './ErrorMessage'
import {fetchUsers} from '../actions/app-actions'

export class App extends Component {
  onClick() {
    return this.props.dispatch(fetchUsers())
  }
  render () {
    return (
      <div className="App">
        <TableViewButton onClick={e => this.onClick(e)}/>
        <ErrorMessage error={this.props.error}/>
        <TableViewer data={this.props.data}/>
      </div>
    );
  }
}


const mapStatetoProps = state => ({
  data: state.data,
  error: state.error
})

export default connect(mapStatetoProps)(App);
