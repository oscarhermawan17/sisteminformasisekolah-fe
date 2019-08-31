import axios from 'axios'
import url from './Url'

export const getAllGuruByIdMataPelajaran = (id_mata_pelajaran) => {
    return dispatch => {
        axios.get(`${url}/guru_mata_pelajaran/single/${id_mata_pelajaran}`, id_mata_pelajaran )
        .then(response => {
            if(response.data.status === "success"){
                dispatch(setGuruByMataPelajaran(response.data.data))
                console.log('hasil guru mata pelajaran', response.data)      
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