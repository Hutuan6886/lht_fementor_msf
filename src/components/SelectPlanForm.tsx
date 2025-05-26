import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SelectPlanFormType } from '../type'
import { SelectPlanSchema } from '../form-schema/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'


import PlanItem from './PlanItem'
import Switch from './Switch'
import FormLabel from './FormLabel'
import Button from './Button'

interface SelectPlanFormProps {
    currentStep: number
    setCurrentStep: (step: number) => void
}
function SelectPlanForm({ currentStep, setCurrentStep }: SelectPlanFormProps) {
    const [selectedOption, setSlectedOption] = useState<"arcade" | "advanced" | "pro">('arcade')

    const { handleSubmit, setValue } = useForm<SelectPlanFormType>({
        defaultValues: {
            selectedPlan: selectedOption,
            isYearly: false
        },
        resolver: zodResolver(SelectPlanSchema)
    })

    useEffect(() => {
        setValue('selectedPlan', selectedOption)
    }, [selectedOption, setValue])

    const selectPlanSubmit = (data: SelectPlanFormType) => {
        console.log("Selected Plan Data:", data)
        setCurrentStep(currentStep + 1)
    }
    return (

        <form onSubmit={handleSubmit(selectPlanSubmit)} className="w-full h-full flex flex-col justify-between">
            <FormLabel title="Select your plan" description="You have the option of monthly or yearly billing." />
            <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between items-center gap-6">
                    <PlanItem label="Arcade" isYear price="$90/mo" description="2 months free" icon='/src/assets/images/icon-arcade.svg' selectedOption={selectedOption} setSelectedOption={setSlectedOption} value='arcade' />
                    <PlanItem label="Advanced" isYear price="$120/mo" description="2 months free" icon='/src/assets/images/icon-advanced.svg' selectedOption={selectedOption} setSelectedOption={setSlectedOption} value='advanced' />
                    <PlanItem label="Pro" isYear price="$150/mo" description="2 months free" icon='/src/assets/images/icon-pro.svg' selectedOption={selectedOption} setSelectedOption={setSlectedOption} value='pro' />
                </div>
                <Switch name='isYearly' setValue={setValue} />
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button type="button" label="Go Back" className="bg-transparent text-[#9699AB] p-0 font-semibold hover:bg-transparent hover:text-[#91939e]" onClick={() => setCurrentStep(currentStep - 1)} />
                <Button type="submit" label="Next Step" />
            </div>
        </form>
    )
}

export default SelectPlanForm
