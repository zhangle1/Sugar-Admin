import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }: { element: React.ReactElement, [key: string]: any }) => {
  const isAuthenticated = false; // 根据实际情况判断认证状态
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return React.cloneElement(element, rest);
};

export default ProtectedRoute;