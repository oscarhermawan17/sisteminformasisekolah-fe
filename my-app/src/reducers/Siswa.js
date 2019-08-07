const initialState = []

export default(state = initialState, action) =>{
  if(action.type === 'SET_ALL_SISWA'){
    console.log("REDUCER ",  action.payload)
    return [...action.payload]
  } 
  return state
}