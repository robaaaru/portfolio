import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { useState, useEffect, useRef } from 'react'
import { Toaster } from './components/retroui/Sonner.jsx'

export default function App() {
    const [page, setPage] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playerKey, setPlayerKey] = useState(0)
    const pageLabels = ["Home", "Projects", "Experience", "Blog", "Profile"]

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

    return(
        <>
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


