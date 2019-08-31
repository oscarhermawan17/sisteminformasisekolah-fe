import React from 'react';
import Navbar from './Navbar'
import Profile from './Profile'
import ListGuruMataPelajaran from './ListGuruMataPelajaran'
import { connect } from 'react-redux'

class Beranda extends React.Component {
  render(){
    return (
      <div>
        <Navbar />
        <Profile/>
        <ListGuruMataPelajaran />
      </div> 
    );
  }
}

const mapStateToProps = (state) =>{
  return{
      token:state.Token
  } 
}

const mapDispatchToProps = (dispatch) =>{
  return{
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Beranda)
