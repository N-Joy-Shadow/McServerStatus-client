export default function versionRegex(text : string) {
    let result = text
    
    if(text.includes(",")){
        let list = text.split(",")
        
        result = `${list[0]} ~ ${list[list.length - 1]}`
    }
    return result
    
};
