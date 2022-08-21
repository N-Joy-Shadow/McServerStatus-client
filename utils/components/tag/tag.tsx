export default function Tag() {
  return (<div>{"hi"}</div>);
}




function DrawCircle(){
    //반지름
    const Diameter = 1
    for(let i = 0; i < 30; i++){
        const radian = (i * 15)*(Math.PI/180)
        const y = Math.sin(Diameter * radian)
        const x = Math.cos(Diameter * radian)
    }
}
