import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [Usuario, setUsuario] = useState("");
  const [Posteo, setPosteo] = useState("");
  const [SesionIniciada, setSesionIniciada] = useState("");


  return (
    <AppContext.Provider value={{ Usuario, setUsuario, Posteo, setPosteo, SesionIniciada, setSesionIniciada }}>
      {children}
    </AppContext.Provider>
  );
};
