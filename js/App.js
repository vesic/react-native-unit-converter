import React, { Component } from 'react'
import Root from './Root'
import { Provider } from 'react-redux'
import store from './store/store'

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
