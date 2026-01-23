
import {Breadcrumb, BreadcrumbItem,BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb"

export default function Header({ activePage = 0, labels = [], onNavigate }){
    const currentLabel = labels[activePage] || "Current"

    const goHome = (event) => {
        event?.preventDefault()
        if(onNavigate){
            onNavigate(0)
        }
    }

    return(
        <header className="fixed top-0 w-full">
            <div className="mx-auto w-[45rem] p-3 md:p-4 h-13 md:h-15 lg:p-5 lg:h-18 border-gray-200 border-b-1 backdrop-blur-2xl overflow-hidden">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" onClick={goHome} className="text-sm p-1 md:text-base lg:p-0 lg:text-lg font-semibold">Robert Tulagan</BreadcrumbLink>
                    </BreadcrumbItem>
                <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">{currentLabel}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>   
            </Breadcrumb>
            </div>
        </header>
    )
}