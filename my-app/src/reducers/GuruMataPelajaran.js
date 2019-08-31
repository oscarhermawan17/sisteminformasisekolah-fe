const initialState = []

export default(state = initialState, action) =>{
  if(action.type === 'SET_ALL_GURU_BY_MATA_PELAJARAN'){
    let tmp = action.payload.map(users => { 
        return {...users.User}
    })
    return tmp;
  } 
  return state
}