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
                <div className="w-[70%] h-[85%] m-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HomeLayout
