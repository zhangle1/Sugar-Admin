import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/themeSlice';
import appReducer from './slice/appSlice';

const preferencesStore = configureStore({
  reducer: {
    theme: themeReducer,
    app: appReducer
  } 
});

export type PreferencesState = ReturnType<typeof preferencesStore.getState>;
export type PreferencesDispatch = typeof preferencesStore.dispatch;




export default preferencesStore;