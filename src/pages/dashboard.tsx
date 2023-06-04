import Card from '@/components/card'
import { useAuth } from '@/contexts/authContext'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import logo from "/public/logo.svg"
import Link from 'next/link'
import { CreateContactModal, EditContactModal }  from '@/components/modal'
import { AuthContextContact } from '@/contexts/contactContext'
import { AiFillCloseCircle } from 'react-icons/ai'


const inter = Inter({ subsets: ['latin'] })

const Dashboard: NextPage = ({}) => {
  const router = useRouter()
  const [contact, setContact] = useState(null)
  
  const { createModal, setCreateModal, editModal, setEditModal }: any = useContext(AuthContextContact);

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
  const { registerContact, editingContact } = useContext(AuthContextContact)  
  
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
          </div>
          <div>
            <button>E</button>
          </div>

          <div>
            <nav>
              <h2>Contatos</h2>
              <button onClick={() => setCreateModal(true)} type={"button"}>Add</button>
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
                    setEditModal={setEditModal}                    
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

      {
        createModal ? 
        <div className="backdrop-modal">
            <div className='modal-wrapper'>
                <div className='modal-header'>
                    <h2>{"Cadastrar contato"}</h2>
                    <button className='icon-buttons' onClick={() => setCreateModal(false)}>{<AiFillCloseCircle/>}</button>
                </div>
                <CreateContactModal/>
            </div>
        </div>
         : 
         <></>
      }
      {
        editModal ?
        <div className="backdrop-modal">
            <div className='modal-wrapper'>
                <div className='modal-header'>
                    <h2>{"Editar contato"}</h2>
                    <button className='icon-buttons' onClick={() => setEditModal(false)}>{<AiFillCloseCircle/>}</button>
                </div>
                <EditContactModal/>
            </div>
        </div>
         : 
         <></>
      }

    </main>
  )
}


export default Dashboard
