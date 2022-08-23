export default function formatplayercount(current : number, max : number ){
    if(max == 0){
        return ""
    }
    const formattedCounter = `${current} / ${max}`
    return formattedCounter

}