

    export interface ServerInfo {
        _id?: string;
        hostName: string;
        isOnline: boolean;
        ip?: string;
        port?: number;
        version?: string;
        bukkit?: string;
        players: Players;
        motd?: string;
        icon? : string
        modList? : string[]
        pluginList? : string[]
    }
    
    export interface Players {
        playerCount: number;
        maxPlayerCount: number;
        playerList?: string[];
    }

    export interface ResData {
        serverInfo: ServerInfo;
        responseinfo: Responseinfo;
    }    
    export interface Responseinfo {
        message?: string;
        isSuccess?: boolean;
    }