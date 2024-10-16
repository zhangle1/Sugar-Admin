import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemePreferences } from '../types';
import { ThemeModeType } from '@sugar/@core/base/typings';

export const lightTheme = {
  foregroundColor: 'hsl(210 6% 21%)',
  mutedForegroundColor: 'hsl(240 3.8% 46.1%)',
  backgroundDeep: 'hsl(210 11.11% 96.47%)',
  background: 'hsl(0 0% 100%)',
  inputBackground: 'hsl(0 0% 100%)',
  inputBorderColor: 'hsl(240deg 5.88% 90%)',
  primaryForeground: 'hsl(0 0% 98%)',
  accent: 'hsl(0 0% 100%)',
  accentForeground: 'hsl(240 6% 10%)',
  bgSideBar: 'hsl(0 0% 100%)',
  border: 'hsl(240 5.9% 90%)'
};

export const darkTheme = {
  foregroundColor: 'hsl(0 0% 95%)',
  mutedForegroundColor: 'hsl(240 5% 64.9%)',
  backgroundDeep: 'hsl(220deg 13.06% 9%)',
  background: 'hsl(222.34deg 10.43% 12.27%)',
  inputBackground: 'hsl(0deg 0% 100% / 5%)',
  inputBorderColor: 'hsl(0deg 0% 100% / 10%)',
  primaryForeground: 'hsl(0 0% 98%)',
  accent: 'hsl(222.34deg 10.43% 12.27%)',
  accentForeground: 'hsl(0 0% 95%)',
  bgSideBar: 'hsl(222.34deg 10.43% 12.27%)',
  border: 'hsl(240 3.7% 22%)'
};

const initialState: ThemePreferences = {
  builtinType: 'default',
  colorDestructive: '#f00',
  colorPrimary: 'hsl(231 98% 65%)',

  menuItemColor:'hsl( 224 71.4% 4.1% )',
  menuItemsActiveColor:'hsl(231 98% 65%)',
  menuItemActiveHoverBg:'hsl( 245 82% 67% /15%)',
  
  colorSuccess: '#0f0',
  colorWarning: '#ff0',
  mode: 'light',
  radius: '4px',
  semiDarkHeader: false,
  semiDarkSidebar: false,
  foregroundColor: lightTheme.foregroundColor,
  mutedForegroundColor: lightTheme.mutedForegroundColor,
  backgroundDeep: lightTheme.backgroundDeep,
  background: lightTheme.background,
  inputBackground: lightTheme.inputBackground,
  inputBorderColor: lightTheme.inputBorderColor,
  primaryForeground: lightTheme.primaryForeground,
  accent: lightTheme.accent,
  accentForeground: lightTheme.accentForeground,
  bgSideBar: lightTheme.bgSideBar,
  border: lightTheme.border
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemePreferences(
      state,
      action: PayloadAction<Partial<ThemePreferences>>
    ) {
      return { ...state, ...action.payload };
    },
    setMode(state, action: PayloadAction<ThemeModeType>) {
      state.mode = action.payload;
    },
    resetTheme: () => initialState

    // 其他 reducers
  }
});

export function useThemeAction() {
  // const { setThemePreferences, setMode } = themeSlice.actions;

  return { ...themeSlice.actions };
}

export default themeSlice.reducer;
