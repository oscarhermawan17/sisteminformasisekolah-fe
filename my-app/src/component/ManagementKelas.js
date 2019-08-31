import React from 'react';
import Navbar from './Navbar'
import ListKelas from './ListKelas'

class ManagementKelas extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    let props = this.props
    return (
      <div>
        <Navbar />
        <ListKelas {...props} />
      </div>
     
    );
  }
}

export default ManagementKelas
