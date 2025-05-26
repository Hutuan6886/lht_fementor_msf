import { useState } from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import SelectPlanForm from "./SelectPlanForm"
import AddOnsForm from "./AddOnsForm"
import Summary from "./Summary"

function MultiForm() {
    const [currentStep, setCurrentStep] = useState(1)
    switch (currentStep) {
        case 1:
            return <PersonalInfoForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
        case 2:
            return <SelectPlanForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
        case 3:
            return <AddOnsForm />
        case 4:
            return <Summary />
        default:
            return <PersonalInfoForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
    }
}

export default MultiForm
