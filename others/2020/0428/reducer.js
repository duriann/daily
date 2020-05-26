const initState = {
  count: 0
}

function reducer(state = initState, action){
  switch(action.type){
    case 'add':
      return {
        ...state,
        count: state.count + 1
      }
    case 'minus':
      return {
        ...state,
        count: state.count - 1
      }  
    default:
      return initState  
  }
}

module.exports = {
  reducer
}