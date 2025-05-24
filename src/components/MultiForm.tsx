import Input from "./Input"
import PlanItem from "./PlanItem"
import Switch from "./Switch"
import Checkbox from "./Checkbox"

function MultiForm() {
    return (
        <div>
            {/* <div className="flex flex-col justify-start gap-4">
                <Input label="Name" />
                <Input label="Email Address" />
                <Input label="Phone Number" />
            </div> */}
            {/* <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between items-center gap-6">
                    <PlanItem label="Arcade" isYear price="$90/mo" description="2 months free" icon='/src/assets/images/icon-arcade.svg' />
                    <PlanItem label="Advanced" isYear price="$120/mo" description="2 months free" icon='/src/assets/images/icon-advanced.svg' />
                    <PlanItem label="Pro" isYear price="$150/mo" description="2 months free" icon='/src/assets/images/icon-pro.svg' />
                </div>
                <Switch />
            </div> */}
            {/* <div className="flex flex-col gap-4">
                <Checkbox title='Online service' description="Assess to mutiplayer game" price="+$1/mo" />
                <Checkbox title='Larger store' description="Extra 1TB of cloud save" price="+$2/mo" />
                <Checkbox title='Customizable profile' description="Custom theme on your profile" price="+$2/mo" />
            </div> */}
            <div className="w-full h-full
                            flex flex-col">
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
        </div>
    )
}

export default MultiForm
