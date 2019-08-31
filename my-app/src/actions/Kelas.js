import axios from 'axios'
import url from './Url'

export const getAllKelas = (criteria_find) => {
      return dispatch => {
        axios.get(`${url}/kelas/get_all_kelas`)
              .then(response => {
                if(response.data.status === 'success'){
                  dispatch(setAllKelas(response.data.data))
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
  
export const setAllKelas = (responseData) =>{
    return {
      type: 'SET_ALL_KELAS',
      payload:responseData
    }
}

export const deleteKelas = (data_user) => {
    return dispatch => {
      axios.delete(`${url}/kelas/delete_kelas`, {headers: {}, data:{id:data_user.id}} )
            .then(response => {
               if(response.data.status === "success"){
                  alert("Success hapus kelas")
                  dispatch(setDeleteOneKelas(response.data.data))                  
               } else {
                 alert(response.data.message_response)
               }
            })
            .catch(function (error) {
              alert("Error Connection. Please check your connection")
            });
    }
  }
  
  export const setDeleteOneKelas = (responseData) =>{
    return {
      type: 'SET_DELETE_ONE_KELAS',
      payload:responseData
    }
  }