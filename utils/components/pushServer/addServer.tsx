import { Button, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Bstyles from "../../../styles/mc/Background.module.css";
import MCTextField from "../MCStyled/mcTextField";
import MCButton from "../MCStyled/mcButton";
import Link from "next/link";
import { useRouter } from "next/router";
import TagSelect from "./tagSelect";
import MarkdownRender from "./markdown";
import { InsertServer } from "../fetch/insertServer";


export default function AddServer() {

  
  return (
    <div
      className={Bstyles.McBackground}
      style={{ width: "100%", height: "100%" }}
    >
      
    </div>
  );
}

// curl
// --verbose
// --request OPTIONS
// 'http://localhost:5238/api/db'
// --header 'Origin: http://localhost:3002'
// --header 'Access-Control-Request-Headers: Origin, Accept, Content-Type'
// --header 'Access-Control-Request-Method: POST'
