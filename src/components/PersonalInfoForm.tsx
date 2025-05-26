import { useForm } from 'react-hook-form'

import { PersonalInfoSchema } from '../form-schema/formSchema'

import Button from './Button'
import FormLabel from './FormLabel'
import Input from './Input'
import { zodResolver } from '@hookform/resolvers/zod'
import type { PersonalInfoFormType } from '../type'

interface PersonalInfoFormProps {
    currentStep: number
    setCurrentStep: (step: number) => void
}
function PersonalInfoForm({ currentStep, setCurrentStep }: PersonalInfoFormProps) {
    const { handleSubmit, register, formState } = useForm<PersonalInfoFormType>({
        defaultValues: {},
        resolver: zodResolver(PersonalInfoSchema)
    })

    const personalInforSubmit = (data: PersonalInfoFormType) => {
        console.log("Personal Info Data:", data);
        setCurrentStep(currentStep + 1)
        // save to store
    }
    return (
        <form onSubmit={handleSubmit(personalInforSubmit)} className="w-full h-full flex flex-col justify-between">
            <FormLabel title="Personal info" description="Please provide your name, email address, and phone number." />
            <div className="flex flex-col justify-start gap-4">
                <Input label="Name" name='name' register={register} formState={formState} />
                <Input label="Email Address" name='email' register={register} formState={formState} />
                <Input label="Phone Number" name='phone' register={register} formState={formState} />
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button type="button" label="Go Back" className="bg-transparent text-[#9699AB] p-0 font-semibold hover:bg-transparent hover:text-[#91939e]" />
                <Button type="submit" label="Next Step" />
            </div>
        </form>

    )
}

export default PersonalInfoForm
