import { useTheme } from 'styled-components';
import {
  useAccessAction,
  useAppAction,
  useThemeAction,
  useUserAction
} from '../slice';
import { PreferencesDispatch } from '../config';

export const resetPreferencesStore = () => (dispatch: PreferencesDispatch) => {
  const { resetAccess } = useAccessAction();
  const { resetApp } = useAppAction();
  const { resetTheme } = useThemeAction();
  const { resetUser } = useUserAction();

  dispatch(resetTheme());
  dispatch(resetApp());
  dispatch(resetUser());
  dispatch(resetAccess());
};
