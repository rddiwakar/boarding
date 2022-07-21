import "./input.css"
const Input = ({title, placeholder,onChange, name})=>{
    return (
        <div className="inputContainer">
            <label>{title}</label>
            <input 
                placeholder={placeholder} 
                onChange={(event)=>onChange(event)}
                name={name} 
            />
        </div>
    )
}
export {Input}