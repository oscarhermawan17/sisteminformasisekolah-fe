import React from 'react';
import Navbar from './Navbar'

import Profile from './Profile'
import ListGuruMataPelajaran from './ListGuruMataPelajaran'
import ListUserComponent from './ListUserComponent'
import ListMatPel from './ListMatPel'


import FormCreateUpdateMataPelajaran from './FormCreateUpdateMataPelajaran'
import { connect } from 'react-redux'


import FormCreateUpdateUser from './FormCreateUpdateUser'

class LandingPage extends React.Component {
  constructor(){
    super()
    this.state={
      auth: "non"
    }
  }

  componentDidMount(){
    
  }

  siwtchComponent(props){
    switch(props.user_navigation){
      case 'create_siswa' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation}/>;
      case 'create_guru' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation}/>;
      case 'update_siswa' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation} edit='yes'/>
      case 'update_guru' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation} edit='yes'/>
      case 'siswa': return <ListUserComponent {...props} user_navigation={this.props.user_navigation} />
      case 'guru': return <ListUserComponent {...props} user_navigation={this.props.user_navigation} />
      case 'create_matpel' : return <FormCreateUpdateMataPelajaran {...props} user_navigation={this.props.user_navigation}/>; 
      case 'management_guru_matpel' : return <ListGuruMataPelajaran />
      case 'management_matpel' : return <ListMatPel />
      case 'profile' : return <Profile/>;
      default : return <div> kosong </div>
    }

  }

  render(){
    let props = this.props
    return (
      <div>
        <Navbar />
        {this.siwtchComponent(props)}
      </div> 
    );
  }
}

const mapStateToProps = (state) => ({
  token:state.Token
})

const mapDispatchToProps = (dispatch) =>{
  return{
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LandingPage)
