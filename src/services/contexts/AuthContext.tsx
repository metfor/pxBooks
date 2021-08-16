
import { createContext, ReactNode } from "react";
import api from "../api";

type SignInCredentials={
    user:string;
    nameApp:string;
}
type AuthContextData={
    signIn(credentials:SignInCredentials):Promise<void>;
    isAuthenticated:Boolean;
}
type AuthProviderProps={
    children:ReactNode
}
export const AuthContext = createContext({}as AuthContextData)

export function AuthProvider({children}:AuthProviderProps){
    const isAuthenticated=false;
    
    async function signIn({user,nameApp}:SignInCredentials){
        try{
        const response = await api.post("sessions",{
            user,
            nameApp
        })
    }catch(err){
        console.log(err)
    }
    }
    return(
        <AuthContext.Provider value={{signIn,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}