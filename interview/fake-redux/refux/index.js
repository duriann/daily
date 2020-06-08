// import reducer from './reducer'
// const reducer = require('./reducer')
export const createStore = (reducer) => {
  let currentState = {}
  let observers = []
  function getState(){
    return currentState
  }
  function dispatch(action){
    currentState = reducer(currentState,action)
    observers.forEach(fn=>fn(currentState))
  }
  function subscribe(fn){
    observers.push(fn)
  }

  dispatch({type:'@INIT_STORE'}) //这边要初始化一下
  return {
    getState,
    dispatch,
    subscribe
  }
}

// const store = createStore(reducer)
// store.dispatch({type: 'add'})
// console.log(store.getState());