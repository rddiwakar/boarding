import "./input.css"
const Input = ({title, placeholder,onChange, name, required})=>{
    return (
        <div className="inputContainer">
            <label>
                {title}
                {name === 'url' && <span style={{color:"grey"}}> (optional)</span>}
            </label>
            <input 
                placeholder={placeholder} 
                onChange={(event)=>onChange(event)}
                name={name} 
                required={required}
            />
        </div>
    )
}
export {Input}