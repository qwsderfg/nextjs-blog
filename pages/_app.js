import { ChakraProvider } from '@chakra-ui/react'
import Image from 'next/image'
import images from '../img'
import { Component } from "react"
import Home from '.'
import "../styles/global.css"

import { NavBar } from "../components/cindex"

const MyApp = ({ Component, pageProps }) => (

    <div >
        <NavBar class="navbar"/>
        <Component {...pageProps} />
    </div>

)

export default MyApp