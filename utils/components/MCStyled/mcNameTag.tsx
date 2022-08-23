interface NameTagProps {
    name : string
}
/**
 * [WIP]
 * @param props 
 * @returns 
 */
export default function McNameTag(props : NameTagProps) {
    return(
        <div className="tag-border">
            <p>{props.name}</p>
            <style jsx>
            {`
                .tag-border{
                    position: relative;
                    display: inline-block;
                    margin: 0 15px 15px 0;
                    padding: 15px 20px;
                }
            `}
            </style>
        </div>
    )
}