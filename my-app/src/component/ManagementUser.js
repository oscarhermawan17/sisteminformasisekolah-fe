import React from 'react';
import Navbar from './Navbar'
import ListUserComponent from './ListUserComponent'

class ManagementUser extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Navbar />
        <ListUserComponent user_navigation={this.props.user_navigation} />
      </div> 
    );
  }
}

export default ManagementUser
