import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/initializeAuthentication";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [isloading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);


    const auth = getAuth();


    // handle email and password
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    //handle registration and login
    const createUser = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be at least 6 characters.")
            return
        }
        isLogin ? userLogin(email, password) : registerNewUser(email, password)

    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("")
                verifyEmail();
            })
            .catch((error) => {
                setError(error.message)
            })

    }

    //handle user login
    const userLogin = (email, password) => {
        // e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("")

            })
            .catch((error) => {
                setError(error.message)
            })

    }

    //toggle registration and login
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    // handle google login

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }

    // handle logout
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false))
    }

    // email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    //reset password
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])
    return {
        user,
        error,
        isloading,
        setIsLoading,
        handleEmailChange,
        handleResetPassword,
        handlePasswordChange,
        createUser,
        registerNewUser,
        userLogin,
        signInUsingGoogle,
        logOut,
        toggleLogin,
        isLogin
    }
}

export default useFirebase;