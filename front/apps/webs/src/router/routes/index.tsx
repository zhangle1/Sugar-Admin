import { Routes } from 'react-router-dom';
import { CoreRoutes, FallbackNotFoundRoute } from './core';

export default function RootRoutes() {
  return (
    <Routes>
      {...FallbackNotFoundRoute()}
      {...CoreRoutes()}
    </Routes>
  );
}

 
