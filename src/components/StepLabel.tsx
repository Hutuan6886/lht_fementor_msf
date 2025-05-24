interface StepLabelProps {
    label: string
    numberStep: string
    active?: boolean
}
function StepLabel({ label, numberStep, active }: StepLabelProps) {
    return (
        <div className="flex flex-row justify-start items-center gap-4">
            <div className={`relative w-10 h-10
                            border rounded-[50px]
                             ${active ? "bg-[#BFE2FD] border-[#BFE2FD] text-black" : "text-[#FAFBFF] border-[#FAFBFF] bg-transparent"}`}>
                <p className="absolute top-1/2 left-1/2 transform -translate-1/2
                                text-[.9rem]">{numberStep}</p>
            </div>
            <div className="flex flex-col justify-center">
                <p className=" text-[.8rem]
                            text-[#aaacb9]">STEP {numberStep}</p>
                <h3 className="text-[.9rem] font-[600] tracking-[.05rem]
                                text-[#FAFBFF]">{label}</h3>
            </div>
        </div>
    )
}

export default StepLabel
