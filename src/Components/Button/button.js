import "./button.css"
const Button = ({onClick})=>{
    return(
        <button className="button" onClick={()=>onClick()}>WorkSpace</button>
    )
}
export {Button}