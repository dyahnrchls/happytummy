import React, { Component } from 'react'

import AppContainer from './src/navigation/Navigation'
import store from './src/store/store'
import { Provider } from 'react-redux'

export default class App extends Component{
  render(){
    return(
      <Provider  store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}