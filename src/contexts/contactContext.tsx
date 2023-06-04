import { ContactData } from "@/schemas/contacts.schema";
import api from "@/service/api";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useState, } from "react";
import { toast } from "react-toastify";


interface Props {
    children: ReactNode
}

interface authContactProviderData {
    registerContact: (contactData: ContactData) => void;
    createModal: boolean;
    setCreateModal: (visible: boolean) => void;
    editModal: boolean;
    setEditModal: (visible: boolean) => void;
    editingContact: {
        id: string;
        name: string;
        email: string;
        phone: string;
        type: string;
    } | null;
    setEditingContact: Dispatch<SetStateAction<{
        id: string;
        name: string;
        email: string;
        phone: string;
        type: string;
    } | null>>;
    setEditContact: (contact: ContactData) => void;
    editContact: (updateContactData: ContactData) => Promise<void>;
}

export const AuthContextContact = createContext({} as authContactProviderData)

export const AuthProviderContact = ({ children }: Props) => {

    const router = useRouter()
    const [ createModal, setCreateModal ] = useState(false)
    const [ editModal, setEditModal] = useState(false)
    const [editingContact, setEditingContact] = useState<ContactData | null>(null);
    

    const setEditContact = (contact: ContactData) => {
        setEditingContact(contact);
        setEditModal(true);
    }

    const registerContact = async (contactData: ContactData) => {
        
        try {
            const token: string | null = localStorage.getItem('agendaweb')
            if (!token) {
                toast.error('Dados expirado, faça o login novamente')
                localStorage.clear()
                router.push('/')
                return
            }
            const response = await api.post('/contacts', contactData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })            
            toast.success('Cadastro realizado')            
        } catch (error) {
            console.log(error)
        } finally {
            setCreateModal(false)
            window.location.reload();            
        }
    }

    const editContact = async (updateContactData: ContactData) => {
        
        try {
            const token: string | null = localStorage.getItem('agendaweb')
            if (!token) {
                toast.error('Dados expirados, faça o login novamente')
                localStorage.clear()
                router.push('/')
                return
            }
            const response = await api.patch(`/contacts/${editingContact?.id}`, updateContactData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            
            toast.success('Editado com sucesso')
            setEditingContact(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setEditModal(false)
            window.location.reload();            
        }
    }

    return (
        <AuthContextContact.Provider value={{ 
            registerContact, 
            createModal, 
            setCreateModal, 
            editModal, 
            setEditModal,
            editingContact,
            setEditingContact,
            setEditContact,
            editContact
        }}>{children}</AuthContextContact.Provider>
    )
}
