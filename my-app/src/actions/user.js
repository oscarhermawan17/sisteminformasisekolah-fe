import axios from 'axios'
import url from './Url'

export const loginAction = (login) => {
  return dispatch => {
    axios.post(`${url}/login`, {
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

// Token.js ==> reducers (SETTING TOKEN)
export const setUserToken = (responseToken) =>{
  return {
    type: 'SET_TOKEN',
    payload:responseToken
  }
}

export const log_Out = () => {
  return {
    type: 'LOG_OUT',
  }
}

export const getSingleProfileUser = (token) => {
  return dispatch => {
    
  }
}

export const getAllUsers = (criteria_find) => {
  if(criteria_find === 'siswa'){
    return dispatch => {
      axios.get(`${url}/users/get_all_students`)
            .then(response => {
              if(response.data.status === 'success'){
                dispatch(setAllUser(response.data.data))
              } else {
                alert(`${response.data.message_response}`)
              }
            })
            .catch(err => {
              alert("Error Connection. Please check your connection")
              window.location.href = ' /login'
            });
    }
  } else if(criteria_find === 'guru'){
    return dispatch => {
      axios.get(`${url}/users/get_all_teachers`)
            .then(response => {
              if(response.data.status === 'success'){
                dispatch(setAllUser(response.data.data))
              } else {
                alert(`${response.data.message_response}`)
              }
            })
            .catch(err => {
              alert("Error Connection. Please check your connection")
            });
    }
  }
  
}

export const setAllUser = (responseData) =>{
  return {
    type: 'SET_ALL_USERS',
    payload:responseData
  }
}

export const createUser = (data_user) => {
  return dispatch => {
    axios.post(`${url}/users/create_user`, data_user )
          .then(response => {
             if(response.data.status === "success"){
                dispatch(inputOneUser(response.data.data))
                alert("Success input user")        
             } else {
               alert(response.data.message_response)
             }
          })
          .catch(function (error) {
            alert("Error Connection. Please check your connection")
          });
  }
}

export const inputOneUser = (responseData) =>{
  return {
    type: 'INPUT_ONE_USER',
    payload:responseData
  }
}

export const deleteUser = (data_user) => {
  return dispatch => {
    axios.delete(`${url}/users/delete_user`, {headers: {}, data:{id:data_user.id}} )
          .then(response => {
             if(response.data.status === "success"){
                alert("Success hapus user")
                dispatch(setDeleteOneUSer(response.data.data))                  
             } else {
               alert(response.data.message_response)
             }
          })
          .catch(function (error) {
            alert("Error Connection. Please check your connection")
          });
  }
}

export const setDeleteOneUSer = (responseData) =>{
  return {
    type: 'SET_DELETE_ONE_USER',
    payload:responseData
  }
}