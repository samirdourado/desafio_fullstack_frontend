import Image from 'next/image'
import logo from "/public/logo.svg"
import { Inter } from 'next/font/google'
import RegisterForm from '@/components/registerForm'
import { NextPage } from 'next'
import Link from 'next/link'
import LoginForm from '@/components/loginForm'

const inter = Inter({ subsets: ['latin'] })

const LoginPage: NextPage = () => {
  return (
    <main className={`reset container  ${inter.className}`}>
        <header className='header'>
            <Image src={logo} alt='Logo' width={200} height={27}/>
            <Link href={'/register'} className='user-form-button'>Cadastrar</Link>
        </header>

        <section className='container-main'>
            <div className='main-logo'>
                <Image src={logo} alt='Logo' width={412} height={56} />
                <p>Gerenciamento de seus contatos de onde você estiver.</p>
            </div>

            <div className="form-area">
                <h2 className='mt-6 font-semibold'>Crie sua conta</h2>
                <LoginForm />
            </div>
        </section>
    </main>
  )
}

export default LoginPage