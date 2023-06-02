import { contactData } from "@/schemas/contacts.schema"
import { BsFillPersonLinesFill, BsFillPersonXFill } from "react-icons/bs"


const Card = ({id, name, email, phone, type, registredAt}: any) => {

    return (
        <li id={id} className='li-card'>
            <div className="flex flex-col items-center min-w-56">
                <p className="m3 text-x1">Nome: {name}</p>
                <p className="m3 text-x1">E-mail: {email}</p>
                <p className="m3 text-x1">Telefone: {phone}</p>
                <p className="m3 text-x1">Tipo: {type}</p>
                {/* <p className="m3 text-x1">:Desde: {registredAt}</p> */}

            </div>
            <div className='li-buttons-wrapper'>
                <button><BsFillPersonLinesFill className="icon-buttons"/></button>                
                <button><BsFillPersonXFill className="icon-buttons"/></button>             
            </div>

        </li>
    )
}

export default Card