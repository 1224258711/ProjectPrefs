import React, { Component } from 'react';
import store from './store/store'
import '../../../复习/webpack-demo-master/src/index.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleStoreChange = this.handleStoreChange.bind(this)
      store.subscribe(this.handleStoreChange)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleChange(e) {
    const action = {
      type: 'UPDATE_STORE_VALUE',
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleClick() {
    const action = {
      type: 'INSERT_LIST_DATE'
    }
    store.dispatch(action)
  }

  handleRemove(i) {
    const action = {
      type: 'REMOVE_LIST_DATE',
      index: i
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div className="App">
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>发送</button>
        <ul>
          {
            this.state.list.map((item, index)=>{
            return <li key={index}>{item}<span onClick={this.handleRemove.bind(this, index)}>x</span></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
