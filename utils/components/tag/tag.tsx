interface TagProps{
  name : string
}


export default function Tag(props : TagProps) {
  return (<div className="outline outline-2 outline-blue-700 p-1 w-auto">
    <p>{props.name}</p>
    </div>);
}


