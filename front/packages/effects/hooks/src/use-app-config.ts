 interface ApplicationConfig {
  apiURL: string;
}

export  function useAppConfig(): ApplicationConfig {
  return {
    apiURL: 'http://localhost:5000'
  };
}
