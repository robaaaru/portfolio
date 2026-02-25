
import {Breadcrumb, BreadcrumbItem,BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import { useEffect, useState } from "react"
import { Play, Pause } from "lucide-react"
import { toast } from "sonner"
import { Link } from "react-router-dom"

export default function Header({ activePage = 0, labels = [], onNavigate, selectedProject, onBack, isPlaying, toggleMusic }){
    const currentLabel = selectedProject ? selectedProject.title : (labels[activePage] || "Current")
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "light"
        const stored = window.localStorage.getItem("theme")
        if (stored === "light" || stored === "dark") return stored
        return "light"
    })

    const goHome = (event) => {
        event?.preventDefault()
        if(onNavigate){
            onNavigate(0)
        }
    }

    useEffect(() => {
        const root = document.documentElement
        if(theme === "dark"){
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
        window.localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => setTheme((prev) => prev === "dark" ? "light" : "dark")
    
    const handleToggleMusic = () => {
        if (!isPlaying) {
            toast("Now Playing", {
                description: "STARWALKIN' (Instrumental) - Lil Nas X",
                duration: 4000,
            })
        }
        toggleMusic()
    }

    const bgTransparent = theme === "dark" ? "rgba(26, 26, 26, 0.15)" : "rgba(255, 255, 255, 0.15)"

    return(
        <header className="fixed top-0 w-full z-50" style={{ backgroundColor: bgTransparent, color: "var(--foreground)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
            <div className="mx-auto w-full md:max-w-[810px] px-3 md:px-4 lg:px-5 h-13 md:h-15 lg:h-18 border-b flex items-center" style={{ borderColor: "var(--border)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
            <div className="flex items-center justify-between gap-2 w-full">
                <Breadcrumb className="min-w-0 flex-1">
                    <BreadcrumbList style={{ color: "var(--foreground)" }} className="flex-nowrap">
                        <BreadcrumbItem className="flex-shrink-0">
                            <Link to="/" className="text-sm md:text-base lg:text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>Robert Tulagan</Link>
                        </BreadcrumbItem>
                    <BreadcrumbSeparator style={{ color: "var(--muted-foreground)" }} className="flex-shrink-0" />
                        {selectedProject ? (
                            <>
                                <BreadcrumbItem className="flex-shrink-0">
                                    <Link to="/projects" className="text-sm md:text-base lg:text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>Projects</Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator style={{ color: "var(--muted-foreground)" }} className="flex-shrink-0" />
                                <BreadcrumbItem className="min-w-0">
                                    <BreadcrumbPage className="text-sm md:text-base lg:text-lg font-semibold tracking-tight truncate block" style={{ color: "var(--foreground)" }}>{currentLabel}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </>
                        ) : (
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-sm md:text-base lg:text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>{currentLabel}</BreadcrumbPage>
                            </BreadcrumbItem>
                        )}
                    </BreadcrumbList>   
                </Breadcrumb>
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
                    <button
                        onClick={handleToggleMusic}
                        aria-label={isPlaying ? "Pause music" : "Play music"}
                        className="w-6 h-6 md:w-7 md:h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                            backgroundColor: "#048688",
                            color: "#fff",
                        }}
                    >
                        {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                    </button>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="w-6 h-6 md:w-7 md:h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{
                            backgroundColor: theme === "dark" ? "#f8fafc" : "#0f172a",
                            border: `1px solid ${theme === "dark" ? "#0f172a" : "#f8fafc"}`,
                            transition: "background-color 200ms ease, border-color 200ms ease",
                        }}
                    >
                        <span className="sr-only">Toggle theme</span>
                    </button>
                </div>
            </div>
            </div>
        </header>
    )
}