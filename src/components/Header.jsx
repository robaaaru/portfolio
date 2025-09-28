
import {Breadcrumb, BreadcrumbItem,BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
export default function Header(){

    return(
        <header className="fixed top-0 w-full">
            <div className="mx-auto w-[45rem] p-3 md:p-4 h-13 md:h-15 lg:p-5 lg:h-18 border-gray-200 border-b-1 backdrop-blur-2xl overflow-hidden">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-sm p-1 md:text-base lg:p-0 lg:text-lg font-semibold">Robert Tulagan</BreadcrumbLink>
                    </BreadcrumbItem>
                <BreadcrumbSeparator/>
                
                </BreadcrumbList>   
            </Breadcrumb>
            </div>
        </header>
    )
}