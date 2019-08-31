const initialState = {}

export default(state = initialState, action) =>{
  if(action.type === 'SET_SINGLE_PROFILE'){
    return action.payload
  }  
  return state
}