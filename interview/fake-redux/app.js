import React, {Component} from 'react'
import ReactDom from 'react-dom'


import {Provider} from './react-redux/Provider'
import {createStore} from './refux'
import countReducer from './countReducer'
import Count from './count'

ReactDom.render(<Provider store={createStore(countReducer)}>
  <Count/>
</Provider>,document.getElementById('app'))
