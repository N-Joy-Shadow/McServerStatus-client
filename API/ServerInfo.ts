export interface Players {
  current: number;
  max: number;
  playerlist: string[];
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
  markdown: string;
  tags: string[];
}

export interface ServerInfo {
  _id?: any;
  hostname: string;
  combine_ip: string;
  port: number;
  frenquency: Frenquency;
  lazy: Lazy;
  custom?: Custom;
}
