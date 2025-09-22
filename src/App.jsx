import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { useState } from 'react'

export default function App() {
    const [currentPage, setPage] = useState('Default Page')

    return(
        <>
        <Header />
        <Body />
        <Footer setPage={setPage}/>
    
        </>
    )
}


