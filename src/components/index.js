import React from 'react'
import Header from './Header'
import Navbar from "./Navbar"
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})

const Home = () => {

    const classes = useStyles()
    return (
        <>
           <Navbar />
           <Header />
        
        </>
    )
}

export default Home
