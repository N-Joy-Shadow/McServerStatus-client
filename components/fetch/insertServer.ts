import axios from "axios";
import https from "https";
import { baseAPIURL } from "./InitFetch";

/**
 * InsertServer to backend DB
 * @param hostname 서버 아이피
 * @returns void
 */
export async function InsertServer(data : any) {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  return await axios({
    url: baseAPIURL("status"),
    httpsAgent: httpsAgent,
    method: "POST",
    data: data
  });
}

/**
 * 커스텀 부분을 수정합니다.
 * @param data 
 * @returns 
 */
export async function EditServer(data : any){
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  return await axios({
    url: baseAPIURL("status"),
    httpsAgent: httpsAgent,
    method: "PUT",
    data: data
  });
}

/**
 *  custom에대한 데이터를 서버로 부터 받습니다.

 * @param hostname 
 * @returns data
 */

export async function EditServerData(hostname : string){
  const data ={ hostname : hostname}
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  return await axios({
    url: baseAPIURL("serverinfo"),
    httpsAgent: httpsAgent,
    method: "POST",
    data: data
  });
}
export async function RemoveServer(data : any){
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  return await axios({
    url: baseAPIURL("status"),
    httpsAgent: httpsAgent,
    method: "DELETE",
    data: data,
  });
}