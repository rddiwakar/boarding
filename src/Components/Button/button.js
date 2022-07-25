import "./button.css"
const Button = ({ onClick }) => {
    return (
        <div style={{marginLeft:"10px"}}>
            <button
                type="submit"
                className="button"
                onClick={() => onClick()}
            >
                WorkSpace
            </button>
        </div>
    )
}
export { Button }