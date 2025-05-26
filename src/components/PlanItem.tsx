interface PlanItemProps {
    label: string;
    icon: string;
    price: string
    description?: string
    isYear: boolean

    selectedOption: 'arcade' | 'advanced' | 'pro';
    setSelectedOption: React.Dispatch<React.SetStateAction<'arcade' | 'advanced' | 'pro'>>;
    value: 'arcade' | 'advanced' | 'pro';
}

function PlanItem({ label, description, price, icon, isYear, selectedOption, setSelectedOption, value }: PlanItemProps) {
    const isChecked = selectedOption === value

    return (
        <>
            <div className={`w-full p-3
                        flex flex-col gap-6
                         border-2 rounded-[.4rem]
                         cursor-pointer transition
                        ${isChecked ? "border-[#473DFF] bg-[#FAFBFF]" : "border-[#D6D9E6]"}`} onClick={() => {
                    if (!isChecked) {
                        setSelectedOption(label.toLowerCase() as 'arcade' | 'advanced' | 'pro');
                    }
                }}>
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
            <input type="checkbox" readOnly hidden checked={isChecked} />
        </>
    )
}

export default PlanItem
