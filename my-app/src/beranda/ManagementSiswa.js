import React from 'react';
import Navbar from './Navbar'
import ListSiswaComponent from './ListSiswaComponent'

class Beranda extends React.Component {
  render(){
    return (
      <div>
        <Navbar />
        <ListSiswaComponent />
      </div> 
    );
  }

}

export default Beranda
