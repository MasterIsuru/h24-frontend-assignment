import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../rootReducer';

const loggerMiddleware = createLogger();

const logged = process.env.REACT_APP_LOG_ENABLED === 'true';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product'], //persist Reducers
  blacklist: ['category'], //Add Other Reducers
};
const enhancers = logged
  ? compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
  : compose(applyMiddleware(thunkMiddleware));
  
const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(enhancers)
);
const persistor = persistStore(store);

export { rootReducer, store, persistor };

export default store;
