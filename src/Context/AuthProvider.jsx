import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

// creat context api
export const AuthContext = createContext()
// acces firebase authentication
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    console.log(user);
    // Setup Firebase auth state observer
 
      useEffect(() => {
          const  unsubscribe = onAuthStateChanged(auth,currentUser => {
              setUser(currentUser);
              setLoading(false);
 
              return () => {
                 return unsubscribe()
             }
 
          }
          )
 
         //  return () => {
         //      unsubscribe()
         // }
 
      },[])
    

    // creat new user with firebase
    const creatUser = (email,password) => {
         setLoading(true);
         return createUserWithEmailAndPassword(auth,email,password)
    }

    // SetUp Firebase log in

    const userLogIn =  (email,password) => {
                setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    




    //  log out
    const userLogOut =  () => {
        setLoading(true)
         return signOut(auth)
    }


        // set context  value  
     const authInfo = {
        user,
        loading,
        setLoading,
        creatUser,
        userLogIn,
        userLogOut
     }

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;