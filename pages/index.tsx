import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from './components/Header'
import Main from './components/Main'
import AvalancheLogo from '../public/avalanche_logo.png'
import Description from './components/Description'
import Benefits from './components/Benefits'
import Team from './components/Team'
import Link from '@mui/material/Link'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NostraCity | A DeFi Mafia Game built with NFTS and Nodes </title>
        <meta name="description" content="NostraCity. A DeFi Mafia Game built with NFTS and Nodes" />
        <link rel="icon" href="/favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </Head>
<header>
  <MenuBar />
</header>
      <main className={styles.main}>
        <Main />
        <div className={styles.made}>
         <div>Built on</div> <Image src={AvalancheLogo} /> <div> Avalanche</div> 
          </div>
            </main>
            <Benefits />
      <Description />        
    <Team />
    <Roadmap />
        <Footer />       
    </div>
  )
}

export default Home
