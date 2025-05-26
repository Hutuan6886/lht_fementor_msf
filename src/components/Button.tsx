import { cn } from "../../libs/utils"
interface ButtonProps {
    label: string
    type: "submit" | "reset" | "button" | undefined
    className?: string
    onClick?: () => void
}
function Button({ label, type, className, onClick }: ButtonProps) {
    return (
        <button type={type} className={cn(`px-5 py-2
                                      rounded-[0.375rem] cursor-pointer
                                      text-[.9rem]
                                      bg-[#030055] text-[#FAFBFF] hover:bg-[#2b268b]`, className)} onClick={onClick}>{label}</button>
    )
}

export default Button
