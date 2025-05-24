import { useRef, useState, type ChangeEvent } from "react"

interface CheckboxProps {
    title: string
    price: string
    description: string
}

function Checkbox({ title, price, description }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(false)
    const checkbocRef = useRef<HTMLInputElement>(null)
    return (
        <div className={`px-5 py-3
                        flex flex-row items-center justify-between
                        border-2 rounded-[0.4rem]
                        ${isChecked ? "border-[#473DFF]" : "border-[#D6D9E6]"} transition ease-in-out cursor-pointer`} onClick={() => checkbocRef.current?.click()}>
            <div className="flex flex-row items-center justify-start gap-8">
                <input ref={checkbocRef} type="checkbox" className="hidden" onChange={(e: ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)} />
                <div className={`relative size-5
                                    ring-0 border rounded-[.4rem]
                                    border-[#D6D9E6] ${isChecked ? "bg-[#473DFF]" : ""}`}>
                    {isChecked && <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3
                                                                                    absolute top-1/2 left-1/2 -translate-1/2
                                                                                    text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 13l4 4L19 7" />
                    </svg>}
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold 
                                    text-[#030055]">{title}</h3>
                    <p className="text-[.85rem]
                                    text-[#9699AB]">{description}</p>
                </div>
            </div>
            <p className="text-[.9rem] 
                        text-[#473DFF]">{price}</p>
        </div>
    )
}

export default Checkbox
