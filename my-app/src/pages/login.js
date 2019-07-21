import React from 'react';
import { connect } from 'react-redux'
import { loginAction } from '../actions/user'
import './page.css'

class login extends React.Component {
  constructor(){
    super()
    this.state = {
      username : "0000",
      password : "admin"
    }
  }

  handleChange(event, value) {
    this.setState({[value]: event.target.value});
  }

  login(){
    this.props.tryLogin({username:this.state.username, password:this.state.password})
  }

  render(){
    return (
      <div className="login">
        <div className="login-area"> 
          <center>SISTEM INFORMASI NEO GAMECENTER</center><br/>
          <div className="login-box"> 
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Masukkan Nis atau Username" onChange={(e) => this.handleChange(e, 'username')}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Kata Sandi" onChange={(e) => this.handleChange(e, 'password')} />
            </div>
            <button className="btn btn-primary" onClick={() => this.login()}>Submit</button>
          </div> 
        </div>
       </div> 
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    tryLogin:(data_login)=>dispatch(loginAction(data_login))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (login)
