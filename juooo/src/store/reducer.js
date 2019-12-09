const defaultState = {
  value: '',
  list: []
}

export default (state=defaultState, action)=>{
  let newState = JSON.parse(JSON.stringify(state))

  switch(action.type) {
    case 'UPDATE_STORE_VALUE':
      newState.value = action.value
      return newState
    case 'INSERT_LIST_DATE':
      newState.list.push(newState.value)
      newState.value = ''
      return newState
    case 'REMOVE_LIST_DATE':
      newState.list.splice(action.index, 1)
      return newState
    default:
      return state
  }
}