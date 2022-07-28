

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
    }
    
    export interface Players {
        playerCount: number;
        maxPlayerCount: number;
        playerList?: string[];
    }