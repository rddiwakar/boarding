import { Button } from "../../Components/Button/button"
import { Input } from "../../Components/Input/input"
import { StepsHeading } from "../../Components/StepsHeading"

const Step1 =({_handleIndexChange,handleDataChange})=>{
    return(
        <div>
            <StepsHeading 
                h1="Welcome! First Things First..." 
                p="You can change them later"
            />
            <Input 
                title={"Full Name"} 
                placeholder={"name"} 
                onChange={handleDataChange} 
                name = 'name'
            />
            <Input 
                title={"Display Name"} 
                placeholder={"username"} 
                onChange={handleDataChange}
                name="username"
            />
            <Button onClick={_handleIndexChange} />
        </div>
    )
}
export {Step1}