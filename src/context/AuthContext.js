import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,

  sendPasswordResetEmail,

  signInWithEmailAndPassword,
  signOut
  
} from "firebase/auth";
import { React, useContext, useState, useEffect, createContext } from "react";
import auth from "../features/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
   const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email);
   }
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        signup,
        logout,
        resetPassword
       
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;