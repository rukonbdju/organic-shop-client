import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, deleteUser, onAuthStateChanged } from "firebase/auth";

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [authLoading, setAuthLoading] = useState(false)

    // create new user with email and password and update name and save to database
    const createNewUserWithEmail = async (email, password) => {
        try {
            setAuthLoading(true)
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.code)
        } finally{
            setAuthLoading(false)
        }
    }

    //sign in with email and password
    const signInWithEmail = async (email, password) => {
        try {
            setAuthLoading(true)
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.code)
        }finally{
            setAuthLoading(false)
        }
    }

    // google sign in with popup
    const signInWithGoogle = async () => {
        try {
            setAuthLoading(true)
            return await signInWithPopup(auth, provider);
        } catch (error) {
            setError(error.code)
        }finally{
            setAuthLoading(false)
        }
    }

    //log out
    const logOut = async () => {
        try {
            setAuthLoading(true)
            return await signOut(auth);
        } catch (error) {
            setError(error.code)
        }finally{
            setAuthLoading(false)
        }
    }

    //sent mail for reset password
    const resetPassword = async (email) => {
        try {
            setAuthLoading(true)
            return await sendPasswordResetEmail(auth, email);
        } catch (error) {
            setError(error.code)
        }finally{
            setAuthLoading(false)
        }
    }

    //delete user
    const deleteAnUser = async () => {
        try {
            setAuthLoading(true)
            const user = auth.currentUser;
            return await deleteUser(user)
        } catch (error) {
            setError(error.code)
        }finally{
            setAuthLoading(false)
        }
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            setUser(user)
            setAuthLoading(false)
          });
          return ()=>unsubscribe();
    },[])
    return {createNewUserWithEmail, signInWithEmail, logOut, signInWithGoogle, resetPassword, deleteAnUser, user, error, authLoading };
}


export default useFirebase;