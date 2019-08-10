import React from 'react';
import Navbar from './Navbar'
import Profile from './Profile'

class Beranda extends React.Component {
  render(){
    return (
      <div>
        <Navbar />
        <Profile/>
        {console.log('m user', this.props)}
      </div> 
    );
  }

}

export default Beranda
