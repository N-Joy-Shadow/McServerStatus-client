import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import NavBar from "../components/navbar"
import InfoServer from '../components/info_server';
import axios from 'axios'
import { ServerInfo } from '../API/ServerInfo'
import https from 'https'

import Footer from '../components/footer';
const Home: NextPage = ({ data } : any)   => {

  return (
    <div className={styles.container}>
      <NavBar/>
      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.main}>
          {data.map((x : ServerInfo ,i : number) =>{
            console.log(x)
            return(<div key={i * 100} ><InfoServer ServerData={x}/></div>)
          })}
        </div>
        
        <Footer/>
      </div>
  )
}

export const getServerSideProps : GetStaticProps = async (context) => {
  const httpAgent = new https.Agent({rejectUnauthorized : false })

  let data;
  await axios({
    url : "http://localhost:5238/api/db",
    httpsAgent : httpAgent,
    method : "POST",
    data : {
      IsAll :true,
    }
  }).then((x) =>{
    data = x.data
  })
return {
  props : {
    data
  }
}

} 


export default Home
