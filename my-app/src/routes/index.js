import React from 'react';
import Login from '../pages/login'
import Beranda from '../component/Beranda'
import ManagementUser from '../component/ManagementUser'
import ManagementKelas from '../component/ManagementKelas'
import CreateUser from '../component/CreateUser'
import CreateMataPelajaran from '../component/CreateMataPelajaran'
import UpdateUser from '../component/UpdateUser'
import ManagementMatPel from '../component/ManagementMatPel'


import { Provider } from 'react-redux'
import { store,  persistor } from '../store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter,  Route, Switch } from 'react-router-dom';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          
          <Route path="/management_siswa" render={(props )=> <ManagementUser {...props} user_navigation="siswa"/>} />
          <Route path="/tambah_siswa"  render={(props )=>  <CreateUser {...props} user_navigation="siswa" />} />
          <Route path="/ubah_siswa/:id"  render={(props )=>  <UpdateUser {...props} user_navigation="siswa" />} />

          <Route path="/management_guru" render={(props )=> <ManagementUser {...props} user_navigation="guru"/>} />
          <Route path="/tambah_guru"  render={(props )=>  <CreateUser {...props} user_navigation="guru" />} />
          <Route path="/ubah_guru/:id"  render={(props )=>  <UpdateUser {...props} user_navigation="guru" />} />

          <Route path="/management_kelas" render={(props )=> <ManagementKelas/>} />


          <Route path="/tambah_mata_pelajaran"  render={(props )=>  <CreateMataPelajaran {...props} user_navigation="siswa" />} />
          <Route path="/management_matpel" render={(props )=> <ManagementMatPel/>} />
          
          
          <Route path="/" exact component={Beranda} />
        </Switch>
      </BrowserRouter>
    </PersistGate>  
  </Provider>
)