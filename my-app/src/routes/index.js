import React from 'react';
import Login from '../pages/login'
import Beranda from '../component/Beranda'
import ManagementUser from '../component/ManagementUser'
import CreateUser from '../component/CreateUser'

import { Provider } from 'react-redux'
import store from '../store/configureStore'
// import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter,  Route, Switch } from 'react-router-dom';

export default () => (
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          
          <Route path="/management_siswa" render={(props )=> <ManagementUser {...props} user_navigation="siswa"/>} />
          <Route path="/tambah_siswa"  render={(props )=>  <CreateUser {...props} user_navigation="siswa" />} />
          <Route path="/ubah_siswa"  render={(props )=>  <CreateUser {...props} user_navigation="siswa" />} />

          <Route path="/management_guru" render={(props )=> <ManagementUser {...props} user_navigation="guru"/>} />
          <Route path="/tambah_guru"  render={(props )=>  <CreateUser {...props} user_navigation="guru" />} />
          <Route path="/ubah_guru" component={Beranda} />
          <Route path="/" exact component={Beranda} />
        </Switch>
      </BrowserRouter>
  </Provider>
)