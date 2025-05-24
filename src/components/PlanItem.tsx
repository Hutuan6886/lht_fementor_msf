import { useRef, useState, type ChangeEvent } from "react";

interface PlanItemProps {
    label: string;
    icon: string;
    price: string
    description?: string
    isYear: boolean
}

function PlanItem({ label, description, price, icon, isYear }: PlanItemProps) {
    const checkboxRef = useRef<HTMLInputElement>(null)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    return (
        <>
            <div className={`w-full p-3
                        flex flex-col gap-6
                         border-2 rounded-[.4rem]
                         cursor-pointer transition
                        ${isChecked ? "border-[#473DFF]" : "border-[#D6D9E6]"}`} onClick={() => checkboxRef.current?.click()}>
                <img src={icon} alt={icon} className="size-8" />
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold
                            text-[#030055]">{label}</h3>
                    <p className="text-[.85rem]
                            text-[#9699AB]">{price}</p>
                    {isYear && <p className="text-[.75rem]
                                        text-[#030055]">{description}</p>}

                </div>
            </div>
            <input ref={checkboxRef} type="checkbox" className="hidden" onChange={(e: ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)} />
        </>
    )
}

export default PlanItem
