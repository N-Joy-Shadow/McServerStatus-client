import { ServerInfo } from '../../../API/ServerInfo';

export default function filterIntegration(ServerList : ServerInfo[],tags : string[],isOnline : boolean) {
    if(isOnline){
        let online_filters =  ServerList.filter(x => x.frenquency.isOnline == true)

        if(tags.length == 0){
            return online_filters
        }else{
            return FilterTags(online_filters,tags)
        }
    }else{
        if(tags.length == 0){
            return ServerList
        }
        else{
            return FilterTags(ServerList,tags)
        }
    }
};


function FilterTags(ServerList : ServerInfo[], tags : string[]){
    let filtered_list : ServerInfo[][] =[];
    let result_list : ServerInfo[] =[]

    
    tags.map((tag) => {
        var data = ServerList.filter(x => x.custom?.tags.includes(tag))
        filtered_list.push(data)
    })

    if(filtered_list.length == 1){
        return filtered_list.reduce((x,y) => x.concat(y));

    }else if(filtered_list.length > 1){
        ServerList.map((x) => {
            let server_tags = x.custom?.tags ?? []
            let tag_count = tags.length

            if(server_tags?.length >= tag_count){
                let same_time = 0;
                tags.map((y) => {
                    for(let j = 0; j < server_tags?.length; j++){
                        if(y == x.custom?.tags[j]){
                            same_time += 1
                            break
                        }
                    }
                })
                if(same_time == tag_count) result_list.push(x)
            }
        })

        return result_list

        
    }
    else{
        return filtered_list.reduce((x,y) => x.concat(y));
    }
}