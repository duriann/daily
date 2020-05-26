
// import { reducer } from './reducer.mjs'
const {reducer} = require('./reducer')
const createStore = () => {
  let currentState = {}
  let observers = []
  function getState(){
    return currentState
  }
  function dispatch(action){
    currentState = reducer(currentState, action)
    observers.forEach(observer=>observer())
  }
  function subscribe(fn){
    observers.push(fn)
  }

  //这边需要初始化一下state

  dispatch({type: '@INIT0428'})

  return {
    getState,
    dispatch,
    subscribe
  }
}

const store = createStore()
store.dispatch({type: 'add'})
console.log(store.getState());