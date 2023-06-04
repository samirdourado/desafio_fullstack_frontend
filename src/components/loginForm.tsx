import { LoginData, loginSchema } from '@/schemas/user.schema'
import Fieldset from './fieldset'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/contexts/authContext'

const LoginForm = () => {
    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    })

    const { login } = useAuth()

    const onFormSubmit = (formData: LoginData) => {
        login(formData)        
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="user-form-container space-y-3">            
            <Fieldset type="text" id="email" label="Email: " placeholder="Digite seu email" {...register("email")}/>
            <Fieldset type="password" id="password" label="Senha: " placeholder="Digite sua senha" {...register("password")}/>
            <button type="submit" className="user-form-button">Entrar</button>            
        </form>
    )
}

export default LoginForm