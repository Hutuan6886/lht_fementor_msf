interface InputProps {

    label: string
    placeholder?: string
}
function Input({ label, placeholder }: InputProps) {
    return (
        <div className='flex flex-col gap-0.5'>
            <h3 className='text-[.85rem] font-semibold
                            text-[#2b268b]'>{label}</h3>
            <input type="text" placeholder={placeholder} className='px-3 py-2
                                                                    text-[.9rem] placeholder:text-[.9rem]
                                                                    border rounded-[.375rem]
                                                                    text-black border-[#9699AB]' />
        </div>
    )
}

export default Input
