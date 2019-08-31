import React from 'react';
import Navbar from './Navbar'
import FormCreateUpdateUser from './FormCreateUpdateUser'

class CreateUser extends React.Component {
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
        <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation}/>
      </div> 
    );
  }
}

export default CreateUser
