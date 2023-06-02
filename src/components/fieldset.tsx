// export function Input({type, id, label, placeholder, register, userTech }) {
import { forwardRef } from "react"

const FieldSetBase = ({type, id, label, placeholder, ...register}: any, ref: any) => {
    return(
        <fieldset className="space-y-3 w-4/5">
            <label htmlFor={id} className="user-form-label">{label}</label>
            <input id={id} type={type} placeholder={placeholder} className="user-form-input" {...register} ref={ref}/>
        </fieldset>
    )
}

const FieldSet = forwardRef(FieldSetBase)
export default FieldSet