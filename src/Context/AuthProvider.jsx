import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import useAxiosSecure from '../Hooks/useAxiosSecure';

// creat context api
export const AuthContext = createContext()
// acces firebase authentication
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const axiosSecure = useAxiosSecure()
    console.log(user);
    // Setup Firebase auth state observer
 
      useEffect(() => {
          const  unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
              setUser(currentUser);
              setLoading(false);

              if(currentUser){
                  const userInfo =  {
                      name : currentUser.displayName ||  'Anonymous',
                      email : currentUser.email,
                      time : new Date()
                    }

                    // send user data to database 
                    try {
        
                        const response = await axiosSecure.post('/api/users', userInfo);
                          
                        
                    } catch (error) {
                            console.log(error);
                               
                    }


                }

          



                     
 
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

    //  Set Up Google Log in

    const googleLogIn = () => {
         setLoading(true);
         return signInWithPopup(auth,googleProvider)
    }

    // update user profile 

    const updateUserProfile = (name) => {
return updateProfile(auth.currentUser , {
    displayName : name
})
    }


        // set context  value  
     const authInfo = {
        user,
        loading,
        setLoading,
        creatUser,
        userLogIn,
        userLogOut,
        googleLogIn,
        updateUserProfile
     }

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;