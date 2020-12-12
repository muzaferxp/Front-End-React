import react from "react";
var data = ["one", "two", "three","four"]
function Card({ name}) {
    return (
        <div>
            {data.map((item,index)=>{
            return <li className='card' key={index}>{item}</li>
        })}
        </div>
    )
}

export default Card;