const initialState = ""

export default(state = initialState, action) =>{
  if(action.type === 'SET_TOKEN'){
    let token = action.payload
    return token;
  } else if(action.type === 'DELETE_TOKEN'){
    let token = ""
    return token;
  } 
  return state
}