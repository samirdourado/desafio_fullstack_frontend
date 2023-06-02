import Card from '@/components/card'
import { useAuth } from '@/contexts/authContext'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'
import logo from "/public/logo.svg"
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

const Dashboard: NextPage = ({}) => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('agendaweb');
    if (!token) {
      router.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const logOut = () => {
    return localStorage.clear()
  }

  const { user } = useAuth()
  const contacts = user?.Contacts  

  return (
    <main className={`reset container  ${inter.className}`}>
      <header className='header-dashboard'>
        <Image src={logo} alt='Logo' width={200} height={27}/>
        <Link onClick={logOut} href={'/'} className='user-form-button'>Sair</Link>
      </header>
      
      {user ?
      (
        <section>
          <nav>
          <div>
            <h2>Olá {user.name}</h2>
            <p>Meus dados</p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.phone}</p>            
            {/* <p>Entrou em: {user.registredAt}</p> */}
          </div>
          <div>
            <button>E</button>
          </div>

          <div>
            <nav>
              <h2>Contatos</h2>
              <button>Add</button>
            </nav>

            <ul className='ul'>
              {user.Contacts? (
                user.Contacts.map((contact: any) => (
                  <Card key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}
                    type={contact.type}
                    registredAt={contact.registredAt}
                  />
                ))
              ) : (
                <p>Nenhum contato Cadastrado</p>
              )}
              
            </ul>
          </div>
        </nav>

        </section>
      ) : (
        <p>Erro ao carregar</p>
      )}
      
    </main>
  )
}


export default Dashboard
