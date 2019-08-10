import React from 'react';
import Navbar from './Navbar'
import Profile from './Profile'

class Beranda extends React.Component {
  render(){
    return (
      <div>
        <Navbar />
        <Profile/>
      </div> 
    );
  }

}

export default Beranda
