import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './ui/uiSlice';

const store = configureStore({
    reducer: {
        ui: UIReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;