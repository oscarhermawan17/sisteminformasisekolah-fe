const UsersInitialState = []
const singleUserInitialState = {}


//MANY USERS
export const User = (state = UsersInitialState, action) =>{
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
  } else if(action.type === 'SET_GURU_BY_NAME'){
    return action.payload
  }
  return state
}

//SINGLE USERS
export const SingleUser = (state = singleUserInitialState, action) =>{
  if(action.type === 'SET_SINGLE_USER_BY_NOMOR_INDUK'){
    return action.payload
  } 
  return state
}