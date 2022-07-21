import { Button } from "../../Components/Button/button"
import { Input } from "../../Components/Input/input"
import { StepsHeading } from "../../Components/StepsHeading"

const Step2 =({_handleIndexChange,handleDataChange})=>{
    return(
        <div>
            <StepsHeading
                h1="Let's set up a home for all your work" 
                p="You can always create workspace later"
            />
            <Input 
                title={"Workspace Name"} 
                placeholder={"workspace name"}
                onChange={handleDataChange} 
                name="workspace"
            />
            <Input 
                title={"Workspace Url"} 
                placeholder={"url"} 
                onChange={handleDataChange}
                name="url"
            />
            <Button onClick = {_handleIndexChange} />
            
        </div>
    )
}
export {Step2}