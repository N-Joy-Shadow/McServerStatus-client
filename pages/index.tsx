import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { createContext, useEffect, useState } from 'react';
import NavBar from "../components/navbar"
import InfoServer from '../components/InfoServer';
import axios from 'axios'
import { ServerInfo } from '../API/ServerInfo';
import Footer from '../components/footer';

import styles from '../styles/Home.module.css'
import serverStyles from "../styles/serverinfo/sideinfo.module.css"
import ServerSideInfoLayout from '../components/ServerList/ServerSideInfoLayout';
import { ExpandMore } from '@mui/icons-material';

const Home: NextPage = ({ data } : any)   => {
  const [serverIp,setServerIp] = useState<string[]>(["rlcs.kro.kr"])
  const [display,setDisplay] = useState<string>("none")
  const [serverInfo,SetserverInfo] = useState<ServerInfo>({
    hostName :"",
    isOnline : false,
    players : {
      playerCount : 0,
      playerList : [''],
      maxPlayerCount :0,
    },
  })
  const [serverPd, setServerPd] = useState<string>(`${styles.main}`)
  useEffect(() =>{
    axios.get("https://localhost:7238/api/serverlist").then((x) =>{
      setServerIp(x.data)
    })
  },[])
  if(serverIp == null){
    <div className={styles.container}>
    <NavBar/>
    <Head>
      <title>서버 리스트</title>
      <meta name="description" content="스티브 갤러리 서버 리스트" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={serverPd}>
      Loading...
    </div>
        <Footer/>
      </div>
  }
  return (
    <div className={styles.container}>
      <NavBar/>
      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServerInfoContext.Provider value={{ data : serverInfo, setData : SetserverInfo}}>
      <div style={{ display: "flex"}}>
        <div className={serverPd} style={{marginRight: serverInfo.hostName== "" ? "20%" : "0%", marginLeft: serverInfo.hostName== "" ? "20%" : "0%"}}>
          {serverIp.map((x,i) => {
            //return(<div key={i}>{x}</div>)

            // useEffect(() => {
            //   setServerPd(`${styles.mainOpen}`)
            //   setServerPd(`${styles.main}`)
            //   console.log(styles.mainOpen)
            //   console.log(serverPd)
            // })
            return (<InfoServer serverip={x} key={i}/>)
          })}
          
          {/* {data.map((x : ServerInfo ,i : number) =>{
            console.log(x)
            return(<div key={i * 100} ><InfoServer ServerData={x}/></div>)
          })} */}
        </div>
          <div className={serverStyles.ServerLayoutContainer} style={{display: serverInfo.hostName == "" ? "none" : "block"}}>
            <ServerSideInfoLayout data={serverInfo}/>
        </div>
        </div>
        </ServerInfoContext.Provider>
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



export const ServerInfoContext =createContext<ServerInfoContext>({
  data : {
    hostName :"",
    isOnline : false,
    players : {
      playerCount : 0,
      playerList : [''],
      maxPlayerCount :0,
    },
  },
  setData: () => {}
})

interface ServerInfoContext{
  data : ServerInfo,
  setData : SetData
}
type SetData = (value: ServerInfo) => void;


export default Home;