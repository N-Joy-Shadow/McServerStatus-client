import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import NavBar from "../components/navbar"
import InfoServer from '../components/info_server';

const Home: NextPage = () => {

  const ServerList = [
    "mumu2.kro.kr",
    "222.114.234.30",
    "mc.shwa.space",
    "survival.서버.한국"
  ]
  return (
    <div className={styles.container}>
      <NavBar/>

      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          {ServerList.map((x,i) =>{
            return (<div key={i}>
              <InfoServer hostname={x}/>
            </div>)
          })}
        </div>
      </div>
  )
}

export default Home
