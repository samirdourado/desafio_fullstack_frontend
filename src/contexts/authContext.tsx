import { LoginData, UserData } from "@/schemas/user.schema";
import api from "@/service/api";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify"
import jwt_decode from "jwt-decode"
import { iUserData } from "./dashboardContext";


interface Props {
    children: ReactNode;
}

interface authProviderData {
    register: (userData: UserData) => void;
    login: (loginData: LoginData) => void;
    user: iUserData | null;
    // setToken: (value: string) => void;
    // token: string | undefined;
}

const AuthContext = createContext<authProviderData>({} as authProviderData)

export const  AuthProvider = ({children}: Props) => {
    const router = useRouter()
    const [user, setUser] = useState<iUserData | null>(null)
    
    useEffect(() => {
        const getApi = async () => {
            try {
                const tokenLocal: any = localStorage.getItem("agendaweb")
                if (!tokenLocal) {
                    return
                }
                
                const token: any = jwt_decode(tokenLocal)
                const user = await api.get(`/users/${token.sub}`, {
                    headers: {
                        Authorization: `Bearer ${tokenLocal}`
                    }
                })                
                setUser(user.data)
                
            } catch (error) { 
                console.log(error)
            }
        }
        getApi()
    }, []) 

    const register = async (userData: UserData) => {
        api.post('/users', userData)        
        .then(() => {
            toast.success('Usuário cadastrado com sucesso', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push('/')
        })
        .catch((err: any) => {
            console.log(err);
            toast.error('Erro ao cadastrar usuário', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

    const login = async (loginData: LoginData) => {
        try {            
            const response = await api.post(`/login`, loginData)            
            const token: any = jwt_decode(response.data.token)
            const user = await api.get(`/users/${token.sub}`, {
                headers: {
                    Authorization: `Bearer ${response.data.token}`
                }
            })
            localStorage.setItem('agendaweb', response.data.token)
            toast.success(`Login realizado com sucesso`)
            router.push("/dashboard")  
            setUser(user.data)
        } catch (error) {
            console.log(error)
        }
    }  

    return (
        <AuthContext.Provider value={{ register, login, user }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)