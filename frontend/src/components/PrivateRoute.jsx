import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";


function PrivateRoute({ children }) {

const { isAuth, setIsAuth, toggleAuth } = useContext(AuthContext);


// console.log('isAuth', isAuth)

  if (!isAuth){
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
