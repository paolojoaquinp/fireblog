import React, { useState, useEffect, createContext, ReactNode } from "react";
import useInitialState from "../hooks/useInitialState";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import toast, { Toaster } from 'react-hot-toast';

const AppContext = createContext<any>(null);

type Props = {
    children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
    const initialData = useInitialState();
    const [theme, setTheme] = useState<boolean>(false);
    
    const [loading, setLoading] = useState(true);
    const [authUser,setAuthUser] = useState(false);


    const signInWithEmailAndPassword = async (email: string, password: string) => {
        // Lógica para iniciar sesión con correo electrónico y contraseña
    };
    const createUserWithEmailAndPassword = async (email: string, password: string, nombres: string) => {
        // Lógica para crear una cuenta con correo electrónico y contraseña
    };


    const emitToast = (msg: string) => {
        toast(msg);
    };

    const contextValues = {
        theme,setTheme,
        loading,setLoading,
        authUser,setAuthUser
    };
    useEffect(() => {
        if(theme) {
            console.log("Tema claro");
            //header
            
            //body
            document.body.style.setProperty(
            "--primary-black",
            "white"
            );
            document.body.style.setProperty("--black", "white");
            document.body.style.setProperty("--white", "black");
        } else {
            //header
            //body
            document.body.style.setProperty("--primary-black", "#222222");
            document.body.style.setProperty("--black", "black");
            document.body.style.setProperty("--white", "white");
            console.log("Tema oscuro");
        }
    }, [theme]);

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if(user) {
                setAuthUser(true);
            }else {
                setAuthUser(false);
            }
        })
    },[authUser]);


    return (
        <>
            <AppContext.Provider value={{
                emitToast,
                contextValues,
                initialData }}>
                { children }
                <Toaster 
                    toastOptions={{ 
                        style: {
                          fontSize: '24px',
                          color:'#fff',
                          backgroundColor: '#000'
                        }
                    }}
                />
            </ AppContext.Provider>
        </>
    )
};

export default AppContext;