import { useState, useEffect } from 'react'
import logoBlack from '@/assets/icons/1robkeyblack.svg'
import logoWhite from '@/assets/icons/1robkeywhite.svg'

export default function Home() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"))
        }
        checkTheme()
        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
        return () => observer.disconnect()
    }, [])

    const logo = isDark ? logoWhite : logoBlack

    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] flex flex-col pt-4 px-4">
            {/* Main Hero Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Left - Logo */}
                <div className="flex-shrink-0">
                    <div 
                        className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-2xl overflow-hidden flex items-center justify-center p-6 relative group"
                        style={{ 
                            backgroundColor: "var(--card)",
                            border: "1px solid var(--card-border)",
                            boxShadow: "3px 3px 0 0 var(--card-border)"
                        }}
                    >
                        <img 
                            src={logo} 
                            alt="Robert Tulagan" 
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Decorative corner accent */}
                        <div 
                            className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                            style={{ backgroundColor: "#048688" }}
                        />
                    </div>
                    {/* Status indicator */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <span 
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: "#22c55e" }}
                        />
                        <span 
                            className="text-xs font-medium"
                            style={{ color: "var(--muted-foreground)" }}
                        >
                            Open to opportunities
                        </span>
                    </div>
                </div>

                {/* Right - Content */}
                <div className="flex-1 text-center md:text-left">
                    {/* Greeting */}
                    <p 
                        className="text-sm font-medium mb-2 tracking-wide uppercase"
                        style={{ color: "#048688" }}
                    >
                        Welcome, I'm
                    </p>
                    
                    <h1 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-head tracking-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Robert Tulagan
                    </h1>

                    {/* Role badge */}
                    <div 
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                        style={{ 
                            backgroundColor: "var(--card)",
                            border: "1px solid var(--card-border)"
                        }}
                    >
                        <span 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "#048688" }}
                        />
                        <span 
                            className="text-sm font-medium"
                            style={{ color: "var(--foreground)" }}
                        >
                            Developer & Tech Enthusiast
                        </span>
                    </div>

                    <p 
                        className="text-sm md:text-base mb-4 leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                    >
                        A tech enthusiast from Antipolo City, currently studying at the 
                        Technological Institute of the Philippines. I'm passionate about 
                        building solutions that tackle real-world challenges.
                    </p>

                    <p 
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                    >
                        I learn through hands-on experience and continuous improvement — 
                        always eager to grow my skills and contribute to meaningful projects.
                    </p>
                </div>
            </div>

            
        </div>
    )
}
