
import { type UseFormRegister, type UseFormStateReturn } from "react-hook-form"
import type { PersonalInfoFormType } from "../type"

interface InputProps {
    label: string
    placeholder?: string

    name: keyof PersonalInfoFormType
    register: UseFormRegister<PersonalInfoFormType>
    formState: UseFormStateReturn<PersonalInfoFormType>
}
function Input({ label, placeholder, name, register, formState }: InputProps) {
    const errorMessages = formState.errors[name]?.message
    return (
        <div className='flex flex-col gap-0.5'>
            <div className="flex flex-row items-center justify-between
                            text-[.85rem] font-semibold">
                <h3 className='text-[#2b268b]'>{label}</h3>
                {errorMessages && <p className="text-[#ED3548]">{errorMessages}</p>}
            </div>
            <input {...register(name)} type="text" placeholder={placeholder} className='px-3 py-2
                                                                    text-[.9rem] placeholder:text-[.9rem]
                                                                    border rounded-[.375rem]
                                                                    text-black border-[#9699AB]' />

        </div>
    )
}

export default Input
