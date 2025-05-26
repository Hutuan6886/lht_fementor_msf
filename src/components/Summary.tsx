import Button from "./Button"
import FormLabel from "./FormLabel"

function Summary() {
    return (

        <div className="w-full h-full flex flex-col justify-between">
            <FormLabel title="Personal info" description="Please provide your name, email address, and phone number." />
            <div className="w-full h-full
                            flex flex-col justify-center">
                <div className="px-6 py-4 
                            flex flex-col gap-4
                            rounded-[.4rem]
                            bg-[#F0F5FF]">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="font-semibold 
                                            text-[#030055]">Arcade (Monthly)</h3>
                            <a href="" className="text-[.85rem] 
                                                        text-[#9699AB]">Change</a>
                        </div>
                        <p className="font-semibold
                                            text-[#030055]">$9/mo</p>
                    </div>
                    <hr className="border-t border-[#aaacb9]" />
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center justify-between">
                            <h4 className="text-[.85rem]
                                            text-[#9699AB]">Online service</h4>
                            <p className="text-[.85rem]
                                            text-[#030055]">$1/mo</p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h4 className="text-[.85rem]
                                            text-[#9699AB]">Larger storage</h4>
                            <p className="text-[.85rem]
                                            text-[#030055]">$2/mo</p>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 flex flex-row items-center justify-between">
                    <h4 className="text-[.85rem]
                                            text-[#9699AB]">Total (per month)</h4>
                    <p className="text-[1.2rem] font-semibold
                                            text-[#473DFF]">$12/mo</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button type="button" label="Go Back" className="bg-transparent text-[#9699AB] p-0 font-semibold hover:bg-transparent hover:text-[#91939e]" />
                <Button type="button" label="Confirm" />
            </div>
        </div>

    )
}

export default Summary
