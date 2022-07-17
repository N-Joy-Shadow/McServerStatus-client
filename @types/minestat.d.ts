declare module "minestat"{
        declare var port : number;
        declare var online : boolean
        declare var version : string
        declare var motd : string
        declare var current_players : number
        declare var max_players : number
        declare var latency : number
        declare var address : string
    
    declare function init(address : string, port : number, timeout? : number, callback : any)
}