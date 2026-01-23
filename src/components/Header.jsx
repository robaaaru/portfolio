
import {Breadcrumb, BreadcrumbItem,BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import { useEffect, useState } from "react"

export default function Header({ activePage = 0, labels = [], onNavigate }){
    const currentLabel = labels[activePage] || "Current"
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "light"
        const stored = window.localStorage.getItem("theme")
        if (stored === "light" || stored === "dark") return stored
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        return prefersDark ? "dark" : "light"
    })
    const [phtTime, setPhtTime] = useState("")

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

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formatted = now.toLocaleTimeString("en-PH", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone: "Asia/Manila",
            })
            setPhtTime(formatted)
        }

        updateTime()
        const id = setInterval(updateTime, 1000)
        return () => clearInterval(id)
    }, [])

    const toggleTheme = () => setTheme((prev) => prev === "dark" ? "light" : "dark")

    return(
        <header className="fixed top-0 w-full overflow-hidden" style={{ backgroundColor: "var(--background)", color: "var(--foreground)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
            <div className="mx-auto w-full md:w-[45rem] p-3 md:p-4 h-13 md:h-15 lg:p-5 lg:h-18 border-b-1 backdrop-blur-2xl overflow-hidden" style={{ borderColor: "var(--border)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
            <div className="flex items-center justify-between gap-2 h-full overflow-hidden">
                <Breadcrumb>
                    <BreadcrumbList style={{ color: "var(--foreground)" }}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#" onClick={goHome} className="text-[0.97rem] p-1 md:text-base lg:p-0 lg:text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>Robert Tulagan</BreadcrumbLink>
                        </BreadcrumbItem>
                    <BreadcrumbSeparator style={{ color: "var(--muted-foreground)" }} />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[0.97rem] md:text-base lg:text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>{currentLabel}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>   
                </Breadcrumb>
                <div className="flex items-center md:gap-3 lg:gap-4 flex-shrink-0">
                    <div className="text-[0.9rem] md:text-base lg:text-lg font-semibold font-mono tabular-nums whitespace-nowrap w-[6.5rem] md:w-[7rem] leading-none tracking-tight flex items-center overflow-hidden mt-0.5 ml-0 md:ml-auto" style={{ color: "var(--foreground)" }}>PHT {phtTime}</div>
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