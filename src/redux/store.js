import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './phonebook/contacts-reducer';
import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devtools: process.env.NODE_ENV === 'development',
});

export default store;
