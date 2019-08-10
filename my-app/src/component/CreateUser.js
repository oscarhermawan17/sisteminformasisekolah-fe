import React from 'react';
import Navbar from './Navbar'
import TableCreateUser from './TableCreateUser'

class CreateUser extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Navbar />
        <TableCreateUser user_navigation={this.props.user_navigation}/>
      </div> 
    );
  }
}

export default CreateUser
