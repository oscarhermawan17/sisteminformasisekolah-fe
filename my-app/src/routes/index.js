import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Login from '../pages/login'
import LandingPage from '../component/LandingPage'
import { BrowserRouter,  Route, Switch } from 'react-router-dom';

const App = (props) => {
  const dispatch = useDispatch()

  const auth = useSelector(
      state => state.Auth
  );

  useEffect(() => {
    async function fetchData() {
      const hasil = await axios.post(`http://127.0.0.1:3001/auth/verify_token`, {token: auth.token })
      if(hasil.data.status === 'success'){
        dispatch({type:'VALID_AUTH_SET_ROLE', payload:hasil.data.data})
        dispatch({type:'SET_PROFILE', payload:hasil.data.data})
      } else {
        dispatch({type:'NOT_VALID'})
      }  
    }
    fetchData();
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        { auth.auth === false ? 
          <Switch>
            <Route path="/" component={Login} />     
          </Switch> : 
          <Switch>
            <Route path="/login" component={Login} />

            {/* CRUD MANAGEMENT SISWA */}
            <Route path="/management_siswa" render={(props)=> <LandingPage {...props} user_navigation="siswa" role={auth.role}/>} />
            <Route path="/tambah_siswa"  render={(props)=>  <LandingPage {...props} user_navigation="create_siswa" role={auth.role} />} />
            <Route path="/ubah_siswa/:id"  render={(props)=>  <LandingPage {...props} user_navigation="update_siswa"role={auth.role} />} />


            {/* CRUD MANAGEMENT GURU */}
            <Route path="/management_guru" render={(props )=> <LandingPage {...props} user_navigation="guru" role={auth.role}/> } />
            <Route path="/tambah_guru"  render={(props )=>  <LandingPage {...props} user_navigation="create_guru" role={auth.role}/>} />
            <Route path="/ubah_guru/:id"  render={(props )=>  <LandingPage {...props} user_navigation="update_guru" role={auth.role} />} />
    
            {/* <Route path="/management_kelas" render={(props )=> <ManagementKelas/>} /> */}

            {/* CRUD MANAGEMENT GURU_MATPEL */}
            <Route path="/management_guru_matpel" render={(props )=> <LandingPage {...props} user_navigation="management_guru_matpel" role={auth.role}/>} />
            
            {/* CRUD MANAGEMENT MATA PELAJARAN */}
            <Route path="/tambah_mata_pelajaran"  render={(props )=>  <LandingPage {...props} user_navigation="create_matpel" role={auth.role} />} />
            <Route path="/management_matpel"  render={(props )=>  <LandingPage {...props} user_navigation="management_matpel" role={auth.role}/>} />
            <Route path="/ubah_mata_pelajaran/:id"  render={(props )=>  <LandingPage {...props} user_navigation="update_matpel" role={auth.role}/>} />
            
            {/* PROFILE */}
            <Route exact path="/" render={(props )=>  <LandingPage {...props} user_navigation="profile" role={auth.role}/>} />

            <Route path="/" render={(props )=>  <LandingPage {...props} user_navigation="404" role={auth.role}/>} />
          </Switch>  
        }
        
      </Switch>
    </BrowserRouter>
  );
}

export default App