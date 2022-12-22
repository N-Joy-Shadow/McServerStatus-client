import { ServerInfo } from './ServerInfo';
export interface ResInfo<T> {
    data : T,
    success : boolean,
    message : string
}