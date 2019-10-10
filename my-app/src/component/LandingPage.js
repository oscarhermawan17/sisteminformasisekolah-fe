import React from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux'

import { changeUrlFalse } from '../actions/ChangeUrl'
import Profile from './Profile'
import Page404 from './Page404'
import ListGuruMataPelajaran from './ListGuruMataPelajaran'
import ListUserComponent from './ListUserComponent'
import ListMatPel from './ListMatPel'


import FormCreateUpdateMataPelajaran from './FormCreateUpdateMataPelajaran'
import FormCreateUpdateUser from './FormCreateUpdateUser'

class LandingPage extends React.Component {
  componentDidUpdate(){
    this.props.toChangeUrlFalse()
  }


  siwtchComponent(props){
    if(props.role === 1){
      switch(props.user_navigation){
        // CRUD USER 
        case 'siswa': return <ListUserComponent {...props} user_navigation={this.props.user_navigation} />
        case 'create_siswa' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation}/>;
        case 'update_siswa' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation} edit='yes'/>
        case 'guru': return <ListUserComponent {...props} user_navigation={this.props.user_navigation} />
        case 'create_guru' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation}/>;
        case 'update_guru' : return <FormCreateUpdateUser {...props} user_navigation={this.props.user_navigation} edit='yes'/>
        // CRUD MATPEL
        case 'management_matpel' : return <ListMatPel />
        case 'create_matpel' : return <FormCreateUpdateMataPelajaran {...props} user_navigation={this.props.user_navigation}/>; 
        case 'update_matpel' : return <FormCreateUpdateMataPelajaran {...props} user_navigation={this.props.user_navigation} edit='yes'/>
        // CRUD GURU_MATPEL
        case 'management_guru_matpel' : return <ListGuruMataPelajaran />
        case 'profile' : return <Profile role_user="1"/>;
        case '404' : return <Page404 />
        default : return <Page404 />
      } 
    } else if(props.role === 2){
        switch(props.user_navigation){
          case 'profile' : return <Profile role_user="2"/>;
          case '404' : return <Page404 />
          default : return <Page404 />
        }
    } else if(props.role === 3){
        switch(props.user_navigation){
          case 'profile' : return <Profile role_user="3" />;
          case '404' : return <Page404 />
          default : return <Page404 />
        }
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

const mapDispatchToProps = (dispatch) => ({
  toChangeUrlFalse:()=>dispatch(changeUrlFalse()),
})

export default connect(null, mapDispatchToProps) (LandingPage)
