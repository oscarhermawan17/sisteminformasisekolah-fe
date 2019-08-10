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
    let props = this.props
    return (
      <div>
        <Navbar />
        <ListUserComponent {...props} user_navigation={this.props.user_navigation} />
      </div>
     
    );
  }
}

export default ManagementUser
