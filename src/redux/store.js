import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contactsReducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const store = configureStore({
//   reducer: { contacts: persistReducer(contactsPersistConfig, contactsReducer) },
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// const persistor = persistStore(store);

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persistor };
