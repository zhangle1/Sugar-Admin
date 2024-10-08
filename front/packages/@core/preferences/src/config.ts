import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/themeSlice';
import appReducer from './slice/appSlice';
import userReducer from './slice/userSlice';
import accessReducer from './slice/accessSlice';
import sidebarReducer from './slice/sidebarSlice';

const preferencesStore = configureStore({
  reducer: {
    theme: themeReducer,
    app: appReducer,
    user:userReducer,
    access:accessReducer,
    sidebar:sidebarReducer
  } 
});

export type PreferencesState = ReturnType<typeof preferencesStore.getState>;
export type PreferencesDispatch = typeof preferencesStore.dispatch;




export default preferencesStore;