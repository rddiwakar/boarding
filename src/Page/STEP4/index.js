import { Button } from "../../Components/Button/button"
import { StepsHeading } from "../../Components/StepsHeading"

const Step4 =({name})=>{
    return(
        <div>
            <div>hi</div>
            <StepsHeading
                h1={`Congratulation ${name}`}
                p="You have completed onboarding, you can start using eden"
            />
            <Button />
        </div>
    )
}
export {Step4}