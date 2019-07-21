import React from 'react';
import Login from '../pages/login'
import Beranda from '../beranda/Beranda'
import { Provider } from 'react-redux'
import { store, 
  // persistor 
} from '../store/configureStore'
// import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter,  Route, Switch } from 'react-router-dom';

export default () => (
  <Provider store={store}>
    {/*<PersistGate loading={null} persistor={persistor}></PersistGate>*/}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/beranda" component={Beranda} />
        </Switch>
      </BrowserRouter>
  </Provider>
    )