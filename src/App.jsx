import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { useState } from 'react'

export default function App() {
    const [page, setPage] = useState(0)
    const pageLabels = ["Home", "Projects", "Experience", "Blog", "Profile"]

    return(
        <>
        <Header activePage={page} labels={pageLabels} onNavigate={setPage} />
        <Body activePage={page} />
        <Footer setPage={setPage} activePage={page} labels={pageLabels}/>
    
        </>
    )
}


