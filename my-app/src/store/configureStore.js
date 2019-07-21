import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducers from '../reducers';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['LoginSession']
// }
// const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(rootReducers, applyMiddleware(thunk, createLogger));
// const persistor = persistStore(store);

export {
  store, 
//   persistor
}
