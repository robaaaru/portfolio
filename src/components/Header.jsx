
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

    return(
        <header className="fixed top-0 w-full" style={{ backgroundColor: "var(--background)", color: "var(--foreground)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
            <div className="mx-auto w-full md:w-[45rem] p-3 md:p-4 h-13 md:h-15 lg:p-5 lg:h-18 border-b-1 backdrop-blur-2xl" style={{ borderColor: "var(--border)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
            <div className="flex items-center justify-between gap-2 h-full overflow-hidden">
                <Breadcrumb>
                    <BreadcrumbList style={{ color: "var(--foreground)" }}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#" onClick={goHome} className="text-sm p-1 md:text-base lg:p-0 lg:text-lg font-semibold" style={{ color: "var(--foreground)" }}>Robert Tulagan</BreadcrumbLink>
                        </BreadcrumbItem>
                    <BreadcrumbSeparator style={{ color: "var(--muted-foreground)" }} />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-sm md:text-base lg:text-lg font-semibold" style={{ color: "var(--foreground)" }}>{currentLabel}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>   
                </Breadcrumb>
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
        </header>
    )
}