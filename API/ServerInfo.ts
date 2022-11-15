export interface Players {
  current: number;
  max: number;
  playerlist: PlayerList[];
}

export interface Frenquency {
  motd: string;
  timestamp?: number;
  isOnline: boolean;
  players: Players;
}

export interface Lazy {
  mods?: any;
  plugins?: any;
  icon: string;
  version: string;
  ip: string;
}

export interface Custom {
  markdown?: string;
  tags: string[];
  gallurl : string;

}
export interface PlayerList{
  name: string
  id : string
}
export interface ServerInfo {
  _id?: any;
  hostname: string;
  display_hostname: string;
  display_port: number;
  combine_ip: string;
  port: number;
  frenquency: Frenquency;
  lazy: Lazy;
  custom?: Custom;
}
