import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/src/getDefaultMiddleware';
import createReducer from 'modules/reducers';
import { NODE_ENV } from 'utils/constants';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['login'],
  storage,
};

export const createAndPersistStore = (
  history: History,
  preloadedState = {},
) => {
  const rootReducer = createReducer({ router: connectRouter(history) });
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

  const options = {
    devTools: NODE_ENV !== 'production',
    reducer: persistedReducer,
    middleware,
    preloadedState,
  };

  const store = configureStore(options);
  const persistor = persistStore(store);

  return { store, persistor };
};
