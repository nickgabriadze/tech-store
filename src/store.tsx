
import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './features/shoppingCartReducer';
import  specsReducer from './features/specsReducer';
import purchaseReducer from './features/purchaseReducer';

const store = configureStore({
   reducer: {
    shoppingCartReducer: shoppingCartReducer,
    specsReducer: specsReducer,
    purchaseReducer: purchaseReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;