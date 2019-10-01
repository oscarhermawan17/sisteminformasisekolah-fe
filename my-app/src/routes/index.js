import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'


import Login from '../pages/login'
import LandingPage from '../component/LandingPage'
import { BrowserRouter,  Route, Switch } from 'react-router-dom';

const App = (props) => {
  const token = useSelector(
      state => state.Token
  );
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(`http://127.0.0.1:3001/auth/verify_token`, {token: token })
      if(response.data)
        setAuth(true)
    }
    fetchData();
  }, [auth]);

  return (
    <BrowserRouter>
      <Switch>

        { auth === false ? 
          <Switch>
            <Route path="/" component={Login} />     
          </Switch> : 
          <Switch>
            <Route path="/login" component={Login} />
          
            <Route path="/management_siswa" render={(props )=> <LandingPage {...props} user_navigation="siswa"/>} />
            <Route path="/tambah_siswa"  render={(props )=>  <LandingPage {...props} user_navigation="create_siswa" />} />
            <Route path="/ubah_siswa/:id"  render={(props )=>  <LandingPage {...props} user_navigation="update_siswa" />} />
    
            <Route path="/management_guru" render={(props )=> <LandingPage {...props} user_navigation="guru"/>} />
            <Route path="/tambah_guru"  render={(props )=>  <LandingPage {...props} user_navigation="create_guru" />} />
            <Route path="/ubah_guru/:id"  render={(props )=>  <LandingPage {...props} user_navigation="update_guru" />} />
    
            {/* <Route path="/management_kelas" render={(props )=> <ManagementKelas/>} /> */}

            <Route path="/management_guru_matpel" render={(props )=> <LandingPage {...props} user_navigation="management_guru_matpel"/>} />
            {/* <Route path="/tambah_guru_matpel"  render={(props )=>  <LandingPage {...props} user_navigation="create_guru" />} />
            <Route path="/ubah_guru_matpe;/:id"  render={(props )=>  <LandingPage {...props} user_navigation="update_guru" />} /> */}


            <Route path="/tambah_mata_pelajaran"  render={(props )=>  <LandingPage {...props} user_navigation="create_matpel" />} />
            <Route path="/management_matpel"  render={(props )=>  <LandingPage {...props} user_navigation="management_matpel" />} />
            
            
            <Route path="/" render={(props )=>  <LandingPage {...props} user_navigation="profile" />} />
          </Switch>  
        }
        
      </Switch>
    </BrowserRouter>
  );
}

export default App