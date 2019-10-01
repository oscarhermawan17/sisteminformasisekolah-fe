const initialState = []

export default(state = initialState, action) =>{
  // console.log('reducers', action.payload)
  if(action.type === 'SET_ALL_GURU_BY_MATA_PELAJARAN'){
    let tmp = action.payload.map(users_matpel => { 
        return { id:users_matpel.id, ...users_matpel.User}
    })
    return tmp;
  } if(action.type === 'ADD_ONE_GURU_MATA_PELAJARAN'){
    let tmp = [...state,  { id:action.payload.id, ...action.payload.User}]
    return tmp
  } else if(action.type === 'DELETE_ONE_GURU_MATA_PELAJARAN'){
    let tmp = state.filter(guru_matpel => guru_matpel.id !== action.payload)
    return tmp
  }
  return state
}