// import { logo } from"../../public/logo.svg"

import { UserData, userSchema } from "@/schemas/user.schema"
import Fieldset from "./fieldset"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useAuth } from "@/contexts/authContext"

const RegisterForm = () => {
    const {register, handleSubmit} = useForm<UserData>({
        resolver: zodResolver(userSchema)
    })

    const { register: registerUser } = useAuth()

    const onFormSubmit = (formData: UserData) => {
        registerUser(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="user-form-container space-y-3">            
            <Fieldset type="text" id="name" label="Nome: " placeholder="Digite seu nome"{...register("name")} />
            <Fieldset type="text" id="email" label="Email: " placeholder="Digite seu email" {...register("email")}/>
            <Fieldset type="password" id="password" label="Senha: " placeholder="Senha com 8 caracteres" {...register("password")}/>
            <Fieldset type="text" id="phone" label="Telefone: " placeholder="Digite seu telefone"{...register("phone")}/>
            <button type="submit" className="user-form-button">Cadastrar</button>            
        </form>
    )
}

export default RegisterForm