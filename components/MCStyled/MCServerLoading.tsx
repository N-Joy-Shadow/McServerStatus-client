import styles from "../../styles/mc/ServerLoading.module.css"

interface ServerLoadingProps {
    isOnline : boolean
    LoadingStr? : string
}

export default function MCServerLoading(props : ServerLoadingProps) {
    let serverIcon  = "https://status.shwa.space/assets/images/icons.png"
    console.log(props.LoadingStr)
    let serverStatusIcon;
    if(props.LoadingStr == "loading...") serverStatusIcon = styles.loading
    else if(props.isOnline == false) serverStatusIcon = styles.offline
    else serverStatusIcon = styles.online
    return(<div className={styles.loadingContainer}>
        <div className={serverStatusIcon}/>
    </div>)
};
