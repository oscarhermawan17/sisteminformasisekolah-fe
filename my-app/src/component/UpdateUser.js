import React from 'react';
import Navbar from './Navbar'
import FormCreateUpdateUser from './FormCreateUpdateUser'

class UpdateUser extends React.Component {
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
        <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation} edit='yes'/>
        {console.log('hasil props U USER = ', this.props)}
      </div> 
    );
  }
}

export default UpdateUser
