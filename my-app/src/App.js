import React from 'react';
import Routes from './routes'
import './App.sass';
import { Provider } from 'react-redux'
import { store,  persistor } from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

const App = (props) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>  
        </Provider>   
      );
}
  

export default App;
