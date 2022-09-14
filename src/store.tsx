
import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './features/shoppingCartReducer';

const store = configureStore({
   reducer: {
    shoppingCartReducer: shoppingCartReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;