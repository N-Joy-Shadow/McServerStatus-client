import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import NavBar from "../components/navbar"
import InfoServer from '../components/InfoServer';
import axios, { AxiosError } from 'axios'
import { ServerInfo } from '../API/ServerInfo'
import https from 'https'
import Footer from '../components/footer';

const Home: NextPage = ({ data } : any)   => {
  const [serverIp,setServerIp] = useState<string[]>([])
  useEffect(() =>{
    axios.get("https://localhost:7238/api/serverlist").then((x) =>{
      setServerIp(x.data)
    })
  },[])
  return (
    <div className={styles.container}>
      <NavBar/>
      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.main}>
          {serverIp.map((x,i) => {
            //return(<div key={i}>{x}</div>)
            return (<InfoServer serverip={x} key={i}/>)
          })}
          {/* {data.map((x : ServerInfo ,i : number) =>{
            console.log(x)
            return(<div key={i * 100} ><InfoServer ServerData={x}/></div>)
          })} */}
        </div>
        
        <Footer/>
      </div>
  )
}

// export const getServerSideProps : GetStaticProps = async (context) => {
//   const httpAgent = new https.Agent({rejectUnauthorized : false })

//   let data;
//   await axios({
//     url : "http://localhost:5238/api/db",
//     httpsAgent : httpAgent,
//     method : "POST",
//     data : {
//       IsAll :true,
//     }
//   }).then((x) =>{
//     data = x.data
//   })
// return {
//   props : {
//     data
//   }
// }

// } 


export default Home
