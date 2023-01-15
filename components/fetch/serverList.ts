import axios from "axios";
import https from "https";
import { baseAPIURL } from './InitFetch';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function serverListFetch() {
  const data = await axios.post(baseAPIURL("serverlist"));

  return data;
}

async function serverNameListFetch() {
  const data = await axios.get(baseAPIURL("serverlist"));

  return data;
}

async function serverUpdateListFetch() {
  const data = await axios.put(baseAPIURL("serverlist"));

  return data;
}
export { serverListFetch, serverNameListFetch,serverUpdateListFetch };
