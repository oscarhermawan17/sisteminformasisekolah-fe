import React from 'react';
import Navbar from './Navbar'
import FormCreateUpdateMataPelajaran from './FormCreateUpdateMataPelajaran'

class CreateMataPelajaran extends React.Component {
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
        <FormCreateUpdateMataPelajaran {...props} user_navigation={this.props.user_navigation}/>
      </div> 
    );
  }
}

export default CreateMataPelajaran
