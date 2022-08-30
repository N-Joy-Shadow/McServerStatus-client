import axios from "axios";
import https from "https";

/**
 * InsertServer to backend DB
 * @param hostname 서버 아이피
 * @returns void
 */
export async function InsertServer(hostname : string) {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  return await axios({
    url: "/v2/api/status",
    httpsAgent: httpsAgent,
    method: "POST",
    data: {
      hostname: hostname,
    },
  });
}
