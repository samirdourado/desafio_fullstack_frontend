// import { contactData } from "@/schemas/contacts.schema"
import { BsFillPersonLinesFill } from "react-icons/bs"


const Card = ({id, name, email, phone, type, setEditModal}: any) => {
    
    return (
        <li id={id} className='li-card'>
            <div className="flex flex-col items-start min-w-56">
                <p className="m3 text-x1">Nome: {name}</p>
                <p className="m3 text-x1">E-mail: {email}</p>
                <p className="m3 text-x1">Telefone: {phone}</p>
                <p className="m3 text-x1">Tipo: {type}</p>
            </div>
            <div className='li-buttons-wrapper'>
                <button onClick={() => setEditModal(true)} type={"button"}><BsFillPersonLinesFill className="icon-buttons"/></button>                                
            </div>
        </li>
    )
}

export default Card