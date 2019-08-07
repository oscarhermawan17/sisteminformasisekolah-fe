import axios from 'axios'

export const loginAction = (login) => {
  return dispatch => {
    axios.post(`http://127.0.0.1:3001/login`, {
            username: login.username,
            password: login.password
          })
          .then(response => {
            if(response.data.status === 'success'){
              dispatch(setUserToken(response.data.token))
              window.location.href = '/'
            } else {
              alert(`${response.data.message_response}`)
            }
          })
          .catch(err => {
            alert("Error Connection. Please check your connection")
            window.location.href = '/#/login'
          });
  }
}

export const setUserToken = (responseToken) =>{
  return {
    type: 'SET_TOKEN_USER',
    payload:responseToken
  }
}

export const log_Out = () => {
  return {
    type: 'LOG_OUT',
  }
}

export const getAllSiswa = (token) => {
  return dispatch => {
    axios.get(`http://127.0.0.1:3001/users/get_all_student`)
          .then(response => {
            if(response.data.status === 'success'){
              dispatch(setAllSiswa(response.data.data))
              // window.location.href = '/#/dashboard'
            } else {
              console.log("masuk else")
              alert(`${response.data.message_response}`)
            }
          })
          .catch(err => {
            console.log("masuk catch", err)
            alert("Error Connection. Please check your connection")
            // window.location.href = ' /login'
          });
  }
}

export const setAllSiswa = (responseData) =>{
  return {
    type: 'SET_ALL_SISWA',
    payload:responseData
  }
}

