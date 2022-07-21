import { Button } from "../../Components/Button/button"
import { StepsHeading } from "../../Components/StepsHeading"

const Step3 = ({_handleIndexChange}) => {
    return (
        <div>
            <StepsHeading
                h1="How are you planning to use Eden?"
                p="We'll streamline your setup experience accordingly"
            />
            <div>
                <div>
                    <h2>For myself</h2>
                    <p>write better, think more clearly,stay organised</p>
                </div>
                <div>
                    <h2>For team</h2>
                    <p>wikis, docs, tasks & projects, all in one place</p>
                </div>
            </div>
            <Button onClick={_handleIndexChange} />
        </div>
    )
}
export { Step3 }