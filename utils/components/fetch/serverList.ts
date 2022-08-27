import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function serverListFetch() {
  const data = await axios.post("/v2/api/serverlist");

  return data;
}

async function serverNameListFetch(){
    const data = await axios.get("/v2/api/serverlist");

  return data;
}

export {
    serverListFetch,
    serverNameListFetch
}
