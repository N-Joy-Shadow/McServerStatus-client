

    export interface ServerInfo {
        _id: string;
        hostName: string;
        isOnline: boolean;
        ip: string;
        port: number;
        version: string;
        bukkit: string;
        players: Players;
        motdHtml: string[];
        icon : string
    }
    
    export interface Players {
        playerCount: number;
        maxPlayerCount: number;
        playerList: string[];
    }