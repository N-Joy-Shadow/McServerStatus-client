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
