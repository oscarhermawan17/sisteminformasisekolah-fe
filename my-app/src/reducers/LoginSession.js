const initialState = {
    token:null
  }

  export default(state = initialState, action) =>{
    let initial = {
      token:null
    }
    if(action.type === 'SET_USER_SESSION'){
      return { token:action.payload }
    } else if(action.type === 'LOG_OUT'){
      window.location.replace('/#/login')
      return {...initial}
    }
    return state
  }
  