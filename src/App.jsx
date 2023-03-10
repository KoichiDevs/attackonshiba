import React from 'react'
import Contact from './components/Contact'
import Features from './components/features'
import Footer from './components/Footer'
import Hero from './components/hero'
import History from './components/History'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Container from './templates/Container'
import { Helmet } from 'react-helmet'
import Seen from './components/Seen'

const App = () => {

    return (
        <>
            <Helmet>
                <script async type="module" id="embrCheckout" src="https://scripts.embr.org/checkout/checkout.js" data-chain="ethereum" data-address="0xf0a3a52eef1ebe77bb2743f53035b5813afe721f">
                </script>
            </Helmet>
            <div className='z-50 relative'>
                <Hero />
            </div>
            <History />
            <Tokenomics />
            <Roadmap />
            <Seen />
            <Contact />
            <Footer />
        </>
    )
}

export default App
