import { motdParser } from "@sfirew/mc-motd-parser";


export default function MotdPaser(motd? : string ) {
     let old_motd= motd ?? '{"text":"호스트 네임을 찾을 수 없습니다."}';
     let motdHtml
    try {
        let motdJson = JSON.parse(old_motd);
        motdHtml = motdParser.autoToHtml(motdJson);
      } catch {
        motdHtml = motdParser.autoToHtml(old_motd);
      }
    
      return(motdHtml)

};
