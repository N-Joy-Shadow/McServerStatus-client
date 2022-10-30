import { ServerInfo } from '../../API/ServerInfo';

export function ServerFilter(list :ServerInfo[],args : string[]) : ServerInfo[]{
    if(args.length ==0) return list
    
    const filtered_name : ServerInfo[][]= []

    args.map(x => {
        const f_list = list.filter(z => z.custom?.tags.includes(x))
        filtered_name.push(f_list)
    })
    //1차원 배열로 만들기
    const result_list_1 = filtered_name.reduce((x,y) => x.concat(y))
    //중복 아이템 삭제
    const result_list = [...new Set(result_list_1)]


    return result_list
}
