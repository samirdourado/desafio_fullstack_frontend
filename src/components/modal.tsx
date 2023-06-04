import { zodResolver } from '@hookform/resolvers/zod'
import { ContactData, createContactSchema, editContactSchema } from '@/schemas/contacts.schema'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContextContact } from '@/contexts/contactContext'
import FieldSetModal from './fieldsetModal'


export const EditContactModal = ({contacts}: any) => {
    

    const {register, handleSubmit, setValue} = useForm<ContactData>({
        resolver: zodResolver(editContactSchema),
        defaultValues: contacts
    })

    const { editContact, editingContact }: any = useContext(AuthContextContact)
    //Tentei passar passar o contato via useContext para os dados ja abrirem preenchidos no modal, mas não consegui, esta vindo null
    //Gostaria de finalizar essa parte.

    const onFormSubmit = (formData: ContactData) => {
        editContact(formData)        
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="form-modal-area">
            <FieldSetModal type="text" id="name" label="Nome: " placeholder="Digite seu nome"{...register("name")} />
            <FieldSetModal type="text" id="email" label="Email: " placeholder="Digite seu email" {...register("email")}/>
            <FieldSetModal type="text" id="phone" label="Telefone: " placeholder="Digite seu telefone"{...register("phone")}/>
            <FieldSetModal type="text" id="type" label="Tipo: " placeholder="Tipo de contato" {...register("type")}/>
            <button type="submit" className="user-form-button">Cadastrar</button> 
        </form>
    )
}

export const CreateContactModal = () => {
    const {register, handleSubmit} = useForm<ContactData>({
        resolver: zodResolver(createContactSchema)
    })

    const { registerContact }: any = useContext(AuthContextContact)

    const onFormSubmit = (formData: ContactData) => {
        registerContact(formData)        
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="form-modal-area">
            <FieldSetModal type="text" id="name" label="Nome: " placeholder="Digite seu nome"{...register("name")} />
            <FieldSetModal type="text" id="email" label="Email: " placeholder="Digite seu email" {...register("email")}/>
            <FieldSetModal type="text" id="phone" label="Telefone: " placeholder="Digite seu telefone"{...register("phone")}/>
            <FieldSetModal type="text" id="type" label="Tipo: " placeholder="Tipo de contato" {...register("type")}/>
            <button type="submit" className="user-form-button">Cadastrar</button> 
        </form>
    )
}