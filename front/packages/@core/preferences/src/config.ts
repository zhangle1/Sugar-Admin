import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/themeSlice';

const preferencesStore = configureStore({
  reducer: {
    theme: themeReducer,
  }
});

export type PreferencesState = ReturnType<typeof preferencesStore.getState>;
export type PreferencesDispatch = typeof preferencesStore.dispatch;




export default preferencesStore;