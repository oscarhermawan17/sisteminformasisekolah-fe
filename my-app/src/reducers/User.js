const initialState = []

export default(state = initialState, action) =>{
  if(action.type === 'SET_ALL_USERS'){
    return action.payload
  } else if(action.type === 'SET_IDENTITY_USER'){
    return action.payload
  } else if(action.type === 'INPUT_ONE_USER'){
    console.log('REDUCER = ', action.payload)
    return [...state, action.payload]
  } else if(action.type === 'SET_DELETE_ONE_USER'){
    let tmp = state.filter( user => user.id !== action.payload.id )
    return tmp;
  }
  return state
}