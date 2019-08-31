import axios from 'axios'
import url from './Url'

//GET ALL MATA PELAJARAN
export const getAllMataPelajaran = () => {
    return dispatch => {
      axios.get(`${url}/mata_pelajaran/get_all_mata_pelajaran`)
            .then(response => {
              if(response.data.status === 'success'){
                dispatch(setAllMataPelajaran(response.data.data))
              } else {
                alert(`${response.data.message_response}`)
              }
            })
            .catch(err => {
              alert("Error Connection. Please check your connection")
              window.location.href = ' /'
            });
    }
}

export const setAllMataPelajaran = (responseData) =>{
  return {
    type: 'SET_ALL_MATA_PELAJARAN',
    payload:responseData
  }
}

//CREATE
export const createMataPelajaran = (data_mata_pelajaran) => {
  return dispatch => {
    axios.post(`${url}/mata_pelajaran/create_mata_pelajaran`, data_mata_pelajaran )
          .then(response => {
             if(response.data.status === "success"){
                dispatch(inputOneMataPelajaran(response.data.data))
                alert("Success input mata pelajaran")        
             } else {
               alert(response.data.message_response)
             }
          })
          .catch(function (error) {
            alert("Error Connection. Please check your connection")
          });
  }
}

export const inputOneMataPelajaran = (responseData) =>{
  return {
    type: 'INPUT_ONE_MATA_PELAJARAN',
    payload:responseData
  }
}

export const deleteMataPelajaran = (data_mata_pelajaran) => {
    return dispatch => {
      axios.delete(`${url}/mata_pelajaran/delete_mata_pelajaran`, {headers: {}, data:{id:data_mata_pelajaran.id}} )
            .then(response => {
               if(response.data.status === "success"){
                  alert("Success hapus mata_pelajaran")
                  dispatch(setDeleteOneMataPelajaran(response.data.data))                  
               } else {
                 alert(response.data.message_response)
               }
            })
            .catch(function (error) {
              alert("Error Connection. Please check your connection")
            });
    }
  }
  
export const setDeleteOneMataPelajaran = (responseData) =>{
  return {
    type: 'SET_DELETE_ONE_MATA_PELAJARAN',
    payload:responseData
  }
}