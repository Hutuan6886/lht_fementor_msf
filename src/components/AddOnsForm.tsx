import { useState } from 'react';
import Checkbox from './Checkbox'
import Button from './Button';
import FormLabel from './FormLabel';

function AddOnsForm() {
    const [addOns, setAddOns] = useState<string[]>([])

    return (
        <form className="w-full h-full flex flex-col justify-between">
            <FormLabel title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
            <div className="flex flex-col gap-4">
                <Checkbox title='Online service' description="Assess to mutiplayer game" price="+$1/mo" setAddOns={setAddOns} />
                <Checkbox title='Larger store' description="Extra 1TB of cloud save" price="+$2/mo" setAddOns={setAddOns} />
                <Checkbox title='Customizable profile' description="Custom theme on your profile" price="+$2/mo" setAddOns={setAddOns} />
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button type="button" label="Go Back" className="bg-transparent text-[#9699AB] p-0 font-semibold hover:bg-transparent hover:text-[#91939e]" />
                <Button type="button" label="Next Step" />
            </div>
        </form>

    )
}

export default AddOnsForm
