import { Button } from "../../Components/Button/button"
import { StepsHeading } from "../../Components/StepsHeading"

const Step4 =({name,onSubmit})=>{
    return(
        <div>
            <div>hi</div>
            <StepsHeading
                h1={`Congratulation ${name}`}
                p="You have completed onboarding, you can start using eden"
            />
            <Button onClick={onSubmit}/>
        </div>
    )
}
export {Step4}