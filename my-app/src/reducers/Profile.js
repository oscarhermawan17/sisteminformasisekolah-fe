const initialState = {
  // nama_lengkap: '',
  // nomor_induk: '',
  // nomor_induk_pegawai: '',
  // alamat: '',
  // email: '',
  // username: '',
  // gender: '',
  // nomor_hp:null
}

export default(state = initialState, action) =>{
  if(action.type === 'SET_PROFILE'){
    let obj = {
      nama_lengkap : action.payload.nama_lengkap,
      nomor_induk : action.payload.nomor_induk,
      nomor_induk_pegawai : action.payload.nomor_induk_pegawai,
      alamat : action.payload.alamat,
      email : action.payload.email,
      username : action.payload.username,
      gender : action.payload.gender,
      nomor_hp : action.payload.nomor_hp
    }
    return obj
  }  
  return state
}