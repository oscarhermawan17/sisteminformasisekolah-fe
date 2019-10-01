import React from 'react';
import { connect } from 'react-redux'
import { loginAction } from '../actions/User'

const css = {
  login_area : {
    margin:"0 auto",
    paddingTop:"50px",   
    maxWidth:"800px"
  },
  button_login : {
    marginTop: "6px",
    width: "100%",
    fontSize: "20px"
  },
  login_box : {
    backgroundColor: "rgb(75, 12, 221)",
    padding:"40px"
  },
  form_margin_top:{
    marginTop: "6px"
  }
}

class login extends React.Component {
  constructor(){
    super()
    this.state = {
      username : "",
      password : ""
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
        <div style={css.login_area}> 
          <center>SISTEM INFORMASI NEO GAMECENTER</center><br/>
          <div style={css.login_box}> 
            <div style={css.form_margin_top}>
              <input className="input" type="emal" placeholder="Masukkan Nis atau Username" onChange={(e) => this.handleChange(e, 'username')}/>
            </div>

            <div style={css.form_margin_top}>
              <input className="input" type="password" placeholder="Kata Sandi" onChange={(e) => this.handleChange(e, 'password')} />
            </div>

            <button style={css.button_login} onClick={() => this.login()}>Submit</button>
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
