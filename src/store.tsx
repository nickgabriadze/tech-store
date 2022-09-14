
import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './features/shoppingCartReducer';
import  specsReducer from './features/specsReducer';

const store = configureStore({
   reducer: {
    shoppingCartReducer: shoppingCartReducer,
    specsReducer: specsReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;