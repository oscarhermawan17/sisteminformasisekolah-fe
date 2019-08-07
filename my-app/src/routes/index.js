import React from 'react';
import Login from '../pages/login'
import Beranda from '../beranda/Beranda'
import ManagementSiswa from '../beranda/ManagementSiswa'

import { Provider } from 'react-redux'
import store from '../store/configureStore'
// import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter,  Route, Switch } from 'react-router-dom';

export default () => (
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Beranda} />
          <Route path="/management_siswa" component={ManagementSiswa} />
        </Switch>
      </BrowserRouter>
  </Provider>
    )