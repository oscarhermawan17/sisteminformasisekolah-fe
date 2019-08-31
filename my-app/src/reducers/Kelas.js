const initialState = []

export default(state = initialState, action) =>{
  if(action.type === 'SET_ALL_KELAS'){
    return action.payload
  } else if(action.type === 'SET_DELETE_ONE_KELAS'){
    // let tmp = state.filter( user => user.id !== action.payload.id )
    return initialState
  } 
  return state
}