
import Button from "../components/Button"
import FormLabel from "../components/FormLabel"
import SidebarDesktop from "../components/SidebarDesktop"
interface HomeLayoutProps {
    children: React.ReactNode
}
function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="w-full h-full p-3
                        grid grid-cols-3 gap-6
                        bg-white
                         rounded-[0.8rem] shadow-[0_0_3px_#cacaca]">
            <div className="sm:col-span-1">
                <SidebarDesktop />
            </div>
            <div className="sm:col-span-2
                            flex flex-col justify-center">
                <div className="w-[70%] h-[80%] m-auto">
                    <div className="w-full h-full flex flex-col justify-between">
                        <FormLabel title="Personal info" description="Please provide your name, email address, and phone number." />
                        {children}
                        <div className="flex flex-row justify-between items-center">
                            <Button type="button" label="Go Back" className="bg-transparent text-[#9699AB] p-0 font-semibold hover:bg-transparent hover:text-[#91939e]" />
                            <Button type="button" label="Next Step" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout
