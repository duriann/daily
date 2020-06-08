const initState={
  count : 0
}

export default function(state={},action){
  switch(action.type){
    case 'addd':
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