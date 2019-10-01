import axios from 'axios'
import url from './Url'

export const getAllGuruByIdMataPelajaran = (id_mata_pelajaran) => {
    return dispatch => {
        axios.get(`${url}/guru_mata_pelajaran/single/${id_mata_pelajaran}`, id_mata_pelajaran )
        .then(response => {
            if(response.data.status === "success"){
                dispatch(setGuruByMataPelajaran(response.data.data))     
            } else {
              alert(response.data.message_response)
            }
        })
        .catch(function (error) {
          alert("Error Connection. Please check your connection")
        });
    }
}

export const setGuruByMataPelajaran = (responseData) =>{
    return {
      type: 'SET_ALL_GURU_BY_MATA_PELAJARAN',
      payload:responseData
    }
  }

export const addGuruFromSearchBar = (data) =>{
  return dispatch => {
    axios.post(`${url}/guru_mata_pelajaran/add_guru_mata_pelajaran`, data )
    .then(response => {
        if(response.data.status === "success"){          
            dispatch(addOneGuruMataPelajaran(response.data.data))   
        } else {
          alert(response.data.message_response)
        }
    })
    .catch(function (error) {
      alert("Error Connection. Please check your connection")
    });
  }
}

export const addOneGuruMataPelajaran = (responseData) =>{
  return {
    type: 'ADD_ONE_GURU_MATA_PELAJARAN',
    payload:responseData
  }
}

export const deleteGuruMataPelajaran = (id_guru_mata_pelajaran) =>{
  return dispatch => {
    axios.delete(`${url}/guru_mata_pelajaran/delete_guru_mata_pelajaran`, {headers: {}, data:{id:id_guru_mata_pelajaran}} )
          .then(response => {
             if(response.data.status === "success"){
                dispatch(deleteOneGuruMataPelajaran(id_guru_mata_pelajaran))  
                alert("Success hapus Guru")               
             } else {
               alert(response.data.message_response)
             }
          })
          .catch(function (error) {
            alert("Error Connection. Please check your connection")
          });
  }
}

export const deleteOneGuruMataPelajaran = (id_guru_mata_pelajaran) =>{
  return {
    type: 'DELETE_ONE_GURU_MATA_PELAJARAN',
    payload:id_guru_mata_pelajaran
  }
}