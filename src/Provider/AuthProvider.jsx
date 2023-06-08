import { createContext } from "react";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const user = "Rabbi Mia";

    const authInfo = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;