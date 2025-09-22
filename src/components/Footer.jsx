
import { Square, PanelsTopLeft, Briefcase, SquarePen, SquareArrowOutUpRight } from 'lucide-react';

export default function Footer({setPage}){
    
    let strokeWidth = 1.8
    const baseClasses = 'stroke-gray-700 hover:stroke-[#048688] lg:w-[1.8rem] lg:h-[1.8rem] w-[1.5rem] h-[1.5rem] hover:-translate-y-1 transition-transform duration-175 ease-in'
    const handleIconClick = () =>setPage('Default Page')

    let icons = [
        {icon: Square, key:'Square'},
        {icon: PanelsTopLeft, key:'PanelsTopLeft'},
        {icon: Briefcase, key:'Briefcase'},
        {icon: SquarePen, key:'PenciSquarePe'},
        {icon: SquareArrowOutUpRight , key:'SquareArrowOutUpRight'},
    ]   

    let iconsArr = () => icons.map(({icon: Icon, key}) => (
        <Icon
        key={key}
        onClick={handleIconClick} 
        strokeWidth={strokeWidth} 
        className={baseClasses}
        /> 
    ) )

    return(
    
    <footer className="fixed bottom-0 w-[100%] p-4 backdrop-blur-2xl">
        <div className="lg:pb-2 flex justify-center items-center gap-6">{iconsArr()}</div>
    </footer>
    )
}
