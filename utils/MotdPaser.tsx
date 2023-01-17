import { motdParser } from "@sfirew/mc-motd-parser";
import { IUpdateTime } from "../API/IServerInfo";
import * as unix from "../utils/time/unix"


export default function MotdPaser(motd? : string, time? : IUpdateTime ) {
  if(time){

    const FromNow =  unix.unixFromNow(time.lastOnline)
    const lastTime = unix.unixToDate(time?.lastOnline)
    let old_motd= motd ?? `{"extra" : [{"text":"호스트 네임을 찾을 수 없습니다.\\n"},{"color": "red", "text" : "${FromNow}"},
    {"color" : "gray" ,"text" : " | ${lastTime}"}]}`;
    let motdHtml
    try {
      let motdJson = JSON.parse(old_motd);
      motdHtml = motdParser.autoToHtml(motdJson);
    } catch {
      motdHtml = motdParser.autoToHtml(old_motd);
    }
    
    return(motdHtml)
    
  }
  else{
    return "몰?루"
  }
};
