interface FormLabelProps {
    title: string
    description: string
}
function FormLabel({ title, description }: FormLabelProps) {
    return (
        <div className="flex flex-col justify-center gap-2">
            <h1 className="text-3xl font-semibold
                            text-[#030055]">{title}</h1>
            <p className="text-[#9699AB]">{description}</p>
        </div>
    )
}

export default FormLabel
