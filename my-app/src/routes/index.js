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
          
          <Route path="/management_siswa" component={() => <ManagementUser user_navigation="siswa" />} />
          <Route path="/tambah_siswa"  component={() => <CreateUser user_navigation="siswa" />} />
          <Route path="/ubah_siswa"  component={Beranda} />

          <Route path="/management_guru" component={() => <ManagementUser user_navigation="guru" />} />
          <Route path="/tambah_guru" component={() => <CreateUser user_navigation="guru" />} />
          <Route path="/ubah_guru" component={Beranda} />
          <Route path="/" exact component={Beranda} />
        </Switch>
      </BrowserRouter>
  </Provider>
    )