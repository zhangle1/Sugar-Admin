// // import { useAppSelector } from '@sugar-core/preferences';
// // import { LocalesContext, LocalesManager } from '@sugar/locales';
// import { PreferencesDispatch } from '@sugar-core/preferences/src/config';
// import { useAccessAction } from '@sugar-core/preferences/src/slice/accessSlice';
// import { useAccessSelector } from '@sugar-core/preferences/src/useSelector';
// import { useAppConfig } from '@sugar/hooks/src';

// import { RequestClient } from '@sugar/request/src';
// import { refreshTokenApi, RequestContext } from 'api';
// import useAuth from 'hooks/useAuth';
// import { useEffect, useMemo } from 'react';
// import { useDispatch } from 'react-redux';

// export const RequestWrapper = ({ children }: any) => {
//   const { apiURL } = useAppConfig();

//   const accessStore = useAccessSelector();

//   const dispatch: PreferencesDispatch = useDispatch();
//   const { setAccessToken, setLoginExpired } = useAccessAction();
//   const { logout } = useAuth();
//   const requestClient = useMemo(() => {
//     var client = new RequestClient({ baseURL: apiURL });
//     async function doReAuthenticate() {
//       dispatch(setAccessToken(null));
//       if (accessStore.isAccessChecked) {
//         dispatch(setLoginExpired(false));
//       } else {
//         logout();
//       }
//     }

//     async function doRefreshToken() {
//       const resp = await refreshTokenApi();
//       const newToken = resp.data;
//       setAccessToken(newToken);
//       return newToken;
//     }

//     function formatToken(token: null | string) {
//       return token ? `Bearer ${token}` : null;
//     }

//     return client;
//   }, [apiURL]);

//   return (
//     <RequestContext.Provider value={requestClient}>
//       {children}
//     </RequestContext.Provider>
//   );
// };
