const initialState = []

export default(state = initialState, action) =>{
  if(action.type === 'SET_ALL_MATA_PELAJARAN'){
    return action.payload
  } else if(action.type === 'INPUT_ONE_MATA_PELAJARAN'){
    return [...state, action.payload]
  } else if(action.type === 'SET_DELETE_ONE_MATA_PELAJARAN'){
    let tmp = state.filter( mata_pelajaran => mata_pelajaran.id !== action.payload.id )
    return tmp;
  } 
  return state
}