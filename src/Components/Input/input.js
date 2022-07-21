import "./input.css"
const Input = ({title, placeholder})=>{
    return (
        <div className="inputContainer">
            <label>{title}</label>
            <input placeholder={placeholder} />
        </div>
    )
}
export {Input}