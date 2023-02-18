import React from 'react'
import Contact from './components/Contact'
import Features from './components/features'
import Footer from './components/Footer'
import Hero from './components/hero'
import History from './components/History'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Container from './templates/Container'

const App = () => {

    return (
        <>
            <Hero />
            <Features />
            <History />
            <Tokenomics />
            <Roadmap />
            <Contact />
            <Footer/>
        </>
    )
}

export default App