import { Custom } from "./ServerInfo"

export interface EditData {
    userinfo : UserInfo,
    custom : Custom,
    url : string
}

export interface UserInfo {
    pw : string,
    id : string
}