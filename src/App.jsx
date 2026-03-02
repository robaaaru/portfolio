import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { useState, useEffect, useRef } from 'react'
import { Toaster } from './components/retroui/Sonner.jsx'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/ui/Home'
import Card from './components/ui/Card'
import ProjectDetail from './components/ui/ProjectDetail'
import BlogList from './components/ui/BlogList'
import BlogDetail from './components/ui/BlogDetail'
import ExperienceList from './components/ui/ExperienceList'
import Certifications from './components/ui/Certifications'
import projects from './data/projects.json'
import blogs from './data/blogs.json'

// Detect in-app browsers (Messenger, Instagram, Facebook, etc.)
const isInAppBrowser = () => {
    const ua = navigator.userAgent || navigator.vendor || window.opera
    return (
        ua.includes('FBAN') || // Facebook App
        ua.includes('FBAV') || // Facebook App
        ua.includes('Instagram') ||
        ua.includes('Messenger') ||
        ua.includes('Twitter') ||
        ua.includes('Line') ||
        ua.includes('KAKAOTALK') ||
        ua.includes('Snapchat') ||
        ua.includes('WhatsApp')
    )
}

export default function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const [isPlaying, setIsPlaying] = useState(false)
    const [playerKey, setPlayerKey] = useState(0)
    const [showBrowserPrompt, setShowBrowserPrompt] = useState(false)
    const pageLabels = ["Projects", "Blog", "Home", "Experience", "Certifications"]

    // Map pathname to page index for Header and Footer
    const getCurrentPage = () => {
        const path = location.pathname
        if (path === '/projects' || path.startsWith('/projects/')) return 0
        if (path === '/blog' || path.startsWith('/blog/')) return 1
        if (path === '/') return 2
        if (path === '/experience') return 3
        if (path === '/certifications') return 4
        return 2 // default to home
    }

    const activePage = getCurrentPage()

    // Get selected project for Header breadcrumb
    const getSelectedProject = () => {
        if (location.pathname.startsWith('/projects/')) {
            const id = parseInt(location.pathname.split('/')[2])
            return projects.find(p => p.id === id) || null
        }
        return null
    }

    const selectedProject = getSelectedProject()

    // Get selected blog for Header breadcrumb
    const getSelectedBlog = () => {
        if (location.pathname.startsWith('/blog/')) {
            const id = parseInt(location.pathname.split('/')[2])
            return blogs.find(b => b.id === id) || null
        }
        return null
    }

    const selectedBlog = getSelectedBlog()

    const [isVisible, setIsVisible] = useState(true)
    const isFirstRender = useRef(true)

    // Handle SPA redirects from GitHub Pages 404.html
    useEffect(() => {
        const search = window.location.search;
        if (search.startsWith('?/')) {
            const path = search.slice(2).split('&')[0]; // get the path part
            navigate(path, { replace: true });
        }
    }, [navigate]);

    // Handle page transitions
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        setIsVisible(false)
        setTimeout(() => {
            setIsVisible(true)
        }, 200)
    }, [location.pathname])

    const pagePaths = ['/projects', '/blog', '/', '/experience', '/certifications']

    // Check for in-app browser on mount
    useEffect(() => {
        if (isInAppBrowser()) {
            setShowBrowserPrompt(true)
        }
    }, [])

    // YouTube video ID for "Starwalking" Instrumental by Lil Nas X
    const youtubeVideoId = "C-Hx3oS7Nfw"
    const startTime = 0 // Start at beginning

    const toggleMusic = () => {
        if (!isPlaying) {
            setPlayerKey(prev => prev + 1) // New key to restart from timestamp
            setIsPlaying(true)
        } else {
            setIsPlaying(false)
        }
    }

    const openInBrowser = () => {
        const url = window.location.href
        // Try to open in external browser
        window.open(url, '_system')
        // For Android
        window.location.href = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`
    }

    return(
        <>
        {/* In-app browser prompt overlay */}
        {showBrowserPrompt && (
            <div 
                className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
            >
                <div 
                    className="p-6 rounded-lg max-w-sm w-full text-center"
                    style={{ 
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--card-border)',
                        boxShadow: '4px 4px 0 0 var(--card-border)'
                    }}
                >
                    <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                        Open in Browser
                    </h2>
                    <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                        For the best experience (including music playback), please open this site in your default browser.
                    </p>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={openInBrowser}
                            className="w-full py-2 px-4 rounded font-semibold text-sm transition-all duration-200"
                            style={{ 
                                backgroundColor: '#048688',
                                color: '#fff',
                            }}
                        >
                            Open in Browser
                        </button>
                        <button
                            onClick={() => setShowBrowserPrompt(false)}
                            className="w-full py-2 px-4 rounded font-semibold text-sm transition-all duration-200"
                            style={{ 
                                backgroundColor: 'transparent',
                                color: 'var(--muted-foreground)',
                                border: '1px solid var(--border)'
                            }}
                        >
                            Continue Anyway
                        </button>
                    </div>
                    <p className="text-xs mt-4" style={{ color: 'var(--muted-foreground)' }}>
                        Tap the menu (⋮ or ⋯) and select "Open in Browser"
                    </p>
                </div>
            </div>
        )}
        
        <Toaster position="bottom-right" className="mb-16 md:mb-20" />
        <Header 
            activePage={activePage} 
            labels={pageLabels} 
            onNavigate={(path) => navigate(path)}
            selectedProject={selectedProject}
            selectedBlog={selectedBlog}
            onBack={() => navigate(-1)}
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
        />
        <main className="min-h-screen pt-16 pb-20 md:pt-18 md:pb-22 lg:pt-20 lg:pb-24 px-3" style={{ backgroundColor: "var(--background)" }}>
            <div 
                style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 200ms ease-out, transform 200ms ease-out'
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Card onSelectProject={(project) => navigate(`/projects/${project.id}`)} />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/blog" element={<BlogList onSelectBlog={(blog) => navigate(`/blog/${blog.id}`)} />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="/experience" element={<ExperienceList />} />
                    <Route path="/certifications" element={<Certifications />} />
                </Routes>
            </div>
        </main>
        <Footer setPage={(newPage) => navigate(pagePaths[newPage])} activePage={activePage} labels={pageLabels} pagePaths={pagePaths}/>
        
        {/* YouTube Player - Hidden, audio only */}
        {isPlaying && (
            <iframe
                key={playerKey}
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&start=${startTime}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                width="1"
                height="1"
                allow="autoplay; encrypted-media"
                style={{ position: 'fixed', bottom: 0, left: 0, opacity: 0, pointerEvents: 'none' }}
            />
        )}
        </>
    )
}


