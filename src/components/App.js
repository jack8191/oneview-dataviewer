import React, {Component} from 'react';
import {connect} from 'react-redux'
import TableViewer from './TableViewer.js'
import TableViewButton from './TableViewButton'
import Message from './Message'
import {fetchUsers} from '../actions/app-actions'

export class App extends Component {
  onClick() {
    return this.props.dispatch(fetchUsers())
  }
  render () {
    return (
      <div className="App">
        <TableViewButton onClick={e => this.onClick(e)}/>
        <Message error={this.props.error} submitting={this.props.submitting}/>
        <TableViewer data={this.props.data}/>
      </div>
    );
  }
}


const mapStatetoProps = state => ({
  data: state.data,
  error: state.error,
  submitting: state.submitting
})

export default connect(mapStatetoProps)(App);
