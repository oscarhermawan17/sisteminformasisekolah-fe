const initialState = {
  token: null,
  role: null,
  auth:false,
}

export default(state = initialState, action) =>{
  if(action.type === 'SET_TOKEN'){
    let obj = {
      token:action.payload,
      role:null,
      auth:true,
    }
    return obj
  } else if(action.type === 'DELETE_TOKEN'){
    let obj = {
      token:null,
      role:null,
      auth:true,
    }
    return obj
  } else if(action.type === 'VALID_AUTH_SET_ROLE'){
    console.log('data', action.payload)
    return {...state, role:action.payload.role}
  } else if(action.type === 'NOT_VALID'){
    let obj = {
      token: null,
      role: null,
      auth:false,
    }
    return obj
  } if(action.type === 'LOG_OUT'){
    let obj = {
      token: null,
      role: null,
      auth:false,
    }
    return obj
  }
  return state
}