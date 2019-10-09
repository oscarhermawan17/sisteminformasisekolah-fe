const initialState = false

export default(state = initialState, action) =>{
  if(action.type === 'CHANGE_URL_TRUE'){
    return true
  } else if(action.type === 'CHANGE_URL_FALSE'){
    return false
  } 
  return state
}