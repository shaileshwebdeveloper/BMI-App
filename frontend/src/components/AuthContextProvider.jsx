import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
