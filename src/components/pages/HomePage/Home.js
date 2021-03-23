import React from 'react'
import HeroSection from '../../HeroSection'
import LatexSection from '../../LatexSection'
import { homeObj1, homeObj2 } from './Data'
import Footer from '../Footer/Footer'

function Home () {
    return (
        <>
            <HeroSection {...homeObj1}/>
            <LatexSection {...homeObj2}/>
            <Footer/>
        </>
    )
}

export default Home