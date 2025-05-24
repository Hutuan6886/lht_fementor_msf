import StepLabel from "./StepLabel"

function SidebarDesktop() {

    return (
        <div
            style={{ backgroundImage: `url(/src/assets/images/bg-sidebar-desktop.svg)` }}
            className="w-full h-full bg-center bg-cover bg-no-repeat
                        rounded-[.6rem]
                        flex flex-col justify-center">
            <div className="w-[70%] m-auto h-[80%]
                            flex flex-col justify-start gap-8">
                <StepLabel numberStep="1" label="YOUR INFO" active />
                <StepLabel numberStep="2" label="SELECT PLAN" active={false} />
                <StepLabel numberStep="3" label="PICK ADD-ONS" active={false} />
                <StepLabel numberStep="4" label="SUMMARY" active={false} />
            </div>
        </div>
    )
}

export default SidebarDesktop
