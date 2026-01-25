import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { useState, useEffect, useRef } from 'react'
import { Toaster } from './components/retroui/Sonner.jsx'

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
    const [page, setPage] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playerKey, setPlayerKey] = useState(0)
    const [showBrowserPrompt, setShowBrowserPrompt] = useState(false)
    const pageLabels = ["Home", "Projects", "Experience", "Blog", "Profile"]

    // Check for in-app browser on mount
    useEffect(() => {
        if (isInAppBrowser()) {
            setShowBrowserPrompt(true)
        }
    }, [])

    // YouTube video ID for "Starwalking" Instrumental by Lil Nas X
    const youtubeVideoId = "C-Hx3oS7Nfw"
    const startTime = 0 // Start at beginning

    const handlePageChange = (newPage) => {
        setPage(newPage)
        setSelectedProject(null) // Clear selected project when navigating
    }

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
            activePage={page} 
            labels={pageLabels} 
            onNavigate={handlePageChange} 
            selectedProject={selectedProject} 
            onBack={() => setSelectedProject(null)}
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
        />
        <Body activePage={page} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        <Footer setPage={handlePageChange} activePage={page} labels={pageLabels}/>
        
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


