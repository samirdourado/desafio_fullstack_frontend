import Image from 'next/image'
import { Inter } from 'next/font/google'
import RegisterForm from '@/components/registerForm'
import { NextPage } from 'next'
import Link from 'next/link'
import tw from "tailwind-styled-components"


const inter = Inter({ subsets: ['latin'] })

const RegisterPage: NextPage = () => {
  return (
    <main className={`reset container  ${inter.className}`}>
        <header className='header'>
            <Image src="../../public/favicon.svg" alt='Logo' width={200} height={27}/>
            <Link href={'/'} className='user-form-button'>Entrar</Link>
        </header>

        <main className='container-main'>
            <div className='main-logo'>
                <Image src="../../public/favicon.svg" alt='Logo' width={412} height={56} />
                <p>Gerenciamento de seus contatos de onde você estiver.</p>
            </div>

            <div className="form-area">
                <h2 className='mt-6 font-semibold'>Crie sua conta</h2>
                <RegisterForm />
            </div>
        </main>
    </main>
  )
}

export default RegisterPage