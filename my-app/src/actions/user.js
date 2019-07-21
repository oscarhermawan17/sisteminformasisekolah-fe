import axios from 'axios'

export const loginAction = (login) => {
  return dispatch => {
    axios.post(`http://127.0.0.1:3001/login`, {
            username: login.username,
            password: login.password
          })
          .then(response => {
            if(response.data.status === 'success'){
              console.log(response.data)
            } else {
              alert(`${response.data.message_response}`)
            }
          })
          .catch(err => {
            alert(err)
          });
  }
}