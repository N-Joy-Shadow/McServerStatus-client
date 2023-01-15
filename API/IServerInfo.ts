export interface Players {
    current: number;
    max: number;
    playerlist: IPlayerList[];
  }
  
  export interface IFrenquency {
    motd: string;
    timestamp?: number;
    isOnline: boolean;
    players: Players;
  }
  
  export interface ILazy {
    mods?: any;
    plugins?: any;
    icon: string;
    version: string;
    ip: string;
  }
  
  export interface ICustom {
    markdown?: string;
    tags: string[];
    gallurl : string;
  
  }
  export interface IPlayerList{
    name: string
    id : string
  }
  export interface IServerInfo {
    _id?: any;
    hostIP : IHostIP
    frenquency: IFrenquency;
    lazy: ILazy;
    custom?: ICustom;
  }
  
  export interface IHostIP {
    decoration: IDecoration;
    original: IOriginal;
  }
  
  export interface IDecoration {
    hostname: string;
    combine_hostname: string;
    port: number;
  }
  
  export interface IOriginal {
    hostname: string;
    combine_hostname: string;
    port: number;
  }