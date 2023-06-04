// export function Input({type, id, label, placeholder, register, userTech }) {
import { forwardRef } from "react"

const FieldSetModalBase = ({type, id, label, placeholder, ...register}: any, ref: any) => {
    return(
        <fieldset className="modal-fieldset">
            <label htmlFor={id} className="user-form-label">{label}</label>
            <input id={id} type={type} placeholder={placeholder} className="user-form-input" {...register} ref={ref}/>
        </fieldset>
    )
}

const FieldSetModal = forwardRef(FieldSetModalBase)

export default FieldSetModal
