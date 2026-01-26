import Card from './ui/Card'
import ProjectDetail from './ui/ProjectDetail'
import BlogDetail from './ui/BlogDetail'
import Home from './ui/Home'
import { useState, useEffect, useRef } from 'react'
import ExperienceList from './ui/ExperienceList'
import BlogList from './ui/BlogList'
import Certifications from './ui/Certifications'

export default function Body({activePage, selectedProject, setSelectedProject}){
    const [isVisible, setIsVisible] = useState(true)
    const [displayedPage, setDisplayedPage] = useState(activePage)
    const [displayedProject, setDisplayedProject] = useState(selectedProject)
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [displayedBlog, setDisplayedBlog] = useState(null)
    const isFirstRender = useRef(true)
    const closingProject = useRef(false)
    const closingBlog = useRef(false)
    const [pendingProject, setPendingProject] = useState(null)
    const [pendingBlog, setPendingBlog] = useState(null)

    // Handle browser back/forward for project detail
    useEffect(() => {
        const onPopState = (e) => {
            closingProject.current = true;
            setIsVisible(false);
            setTimeout(() => {
                setDisplayedProject(null);
                closingProject.current = false;
                setIsVisible(true);
            }, 200);
        };
        if (displayedProject) {
            window.history.pushState({ project: true }, '', '#project');
            window.addEventListener('popstate', onPopState);
        }
        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, [displayedProject]);

    // Handle browser back/forward for blog detail
    useEffect(() => {
        const onPopState = (e) => {
            closingBlog.current = true;
            setIsVisible(false);
            setTimeout(() => {
                setDisplayedBlog(null);
                closingBlog.current = false;
                setIsVisible(true);
            }, 200);
        };
        if (displayedBlog) {
            window.history.pushState({ blog: true }, '', '#blog');
            window.addEventListener('popstate', onPopState);
        }
        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, [displayedBlog]);

    // Handle smooth transition when opening a project
    useEffect(() => {
        if (pendingProject) {
            setIsVisible(false);
            setTimeout(() => {
                setDisplayedProject(pendingProject);
                setIsVisible(true);
                setPendingProject(null);
            }, 200);
        }
    }, [pendingProject]);

    // Handle smooth transition when opening a blog
    useEffect(() => {
        if (pendingBlog) {
            setIsVisible(false);
            setTimeout(() => {
                setDisplayedBlog(pendingBlog);
                setIsVisible(true);
                setPendingBlog(null);
            }, 200);
        }
    }, [pendingBlog]);

    // Handle page transitions
    useEffect(() => {
        // Skip transition on first render
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        // Fade out
        setIsVisible(false)
        
        // After fade out, update content and fade in
        const timer = setTimeout(() => {
            setDisplayedPage(activePage)
            setDisplayedProject(selectedProject)
            setDisplayedBlog(selectedBlog)
            // Small delay before fading in
            setTimeout(() => {
                setIsVisible(true)
            }, 50)
        }, 150)

        return () => clearTimeout(timer)
    }, [activePage, selectedProject, selectedBlog])
    
    // If a project is selected, show the project detail view
    if (displayedProject) {
        return (
            <main className="min-h-screen pt-16 pb-20 md:pt-18 md:pb-22 lg:pt-20 lg:pb-24 px-3" style={{ backgroundColor: "var(--background)" }}>
                <div 
                    style={{ 
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 200ms ease-out, transform 200ms ease-out'
                    }}
                >
                    <ProjectDetail project={displayedProject} onBack={() => setDisplayedProject(null)} />
                </div>
            </main>
        )
    }

    // If a blog is selected, show the blog detail view
    if (displayedBlog) {
        return (
            <main className="min-h-screen pt-16 pb-20 md:pt-18 md:pb-22 lg:pt-20 lg:pb-24 px-3" style={{ backgroundColor: "var(--background)" }}>
                <div 
                    style={{ 
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 200ms ease-out, transform 200ms ease-out'
                    }}
                >
                    <BlogDetail blog={displayedBlog} onBack={() => setDisplayedBlog(null)} />
                </div>
            </main>
        )
    }
    
    const content = (() => {
        switch(displayedPage){
            case 0: return <Card onSelectProject={(project) => {
                setIsVisible(false);
                setTimeout(() => {
                    setPendingProject(project);
                }, 200);
            }} />
            case 1: return (<BlogList onSelectBlog={(blog) => {
                setIsVisible(false);
                setTimeout(() => {
                    setPendingBlog(blog);
                }, 200);
            }} />)
            case 2: return <Home />
            case 3: return (<ExperienceList />)
            case 4: return <Certifications />
        }
    })();

    return (
        <main className="min-h-screen pt-16 pb-20 md:pt-18 md:pb-22 lg:pt-20 lg:pb-24 px-3" style={{ backgroundColor: "var(--background)" }}>
            <div 
                style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 200ms ease-out, transform 200ms ease-out'
                }}
            >
                {content}
            </div>
        </main>
    )
}