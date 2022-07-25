// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";
import * as ms from "minestat";
type Data = {
  name: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  let data : any

  axios.post(`http://localhost:5238/api/db`,{ip : "mc.shwa.space"}).then((x) => {
    data = x.data
    console.log(x)
    res.status(200).json({datas : data});

  }); 

}