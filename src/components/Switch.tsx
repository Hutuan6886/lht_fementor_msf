import { useRef, useState, type ChangeEvent } from 'react'
import type { SelectPlanFormType } from '../type'
import type { UseFormSetValue } from 'react-hook-form'
interface SwitchProps {
    name: keyof SelectPlanFormType
    setValue: UseFormSetValue<SelectPlanFormType>
}

function Switch({ name, setValue }: SwitchProps) {
    const swichRef = useRef<HTMLInputElement>(null)
    const [isYearly, setIsYearly] = useState<boolean>(false)
    return (
        <div className="w-full relative">
            <div className='absolute top-0 left-1/2 -translate-x-1/2
                            flex flex-row items-center justify-center gap-4'>
                <p className={`text-[.85rem] font-semibold
                                transition
                                ${!isYearly ? "text-[#030055]" : "text-[#9699AB]"}`}>Monthly</p>
                <div className="w-[1.8rem] h-[0.94rem] 
                                    flex flex-col justify-center 
                                    rounded-[50px] inset-shadow-2xs
                                    cursor-pointer transition ease-in-out
                                    bg-[#030055]" onClick={() => swichRef.current?.click()}>
                    <div className={`size-2.5 
                                    ${isYearly ? 'mx-[1rem]' : 'mx-[0.125rem]'}
                                    bg-white
                                        rounded-[50px] shadow-md`}></div>
                </div>
                <p className={`text-[.85rem] font-semibold
                                transition
                                ${isYearly ? "text-[#030055]" : "text-[#9699AB]"}`}>Yearly</p>
            </div>
            <input ref={swichRef} type="checkbox" className="hidden" onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIsYearly(e.target.checked)
                setValue(name, e.target.checked)
            }} />
        </div>
    )
}

export default Switch
