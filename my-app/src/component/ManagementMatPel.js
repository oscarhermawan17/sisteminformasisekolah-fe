import React from 'react';
import Navbar from './Navbar'
import ListMatPel from './ListMatPel'

class ManagementMatPel extends React.Component {
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
        <ListMatPel {...props}  />
      </div>
     
    );
  }
}

export default ManagementMatPel
