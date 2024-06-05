import { useState } from "react";
function Practise(props){
    let [count,setCount] = useState(0);
    var data1 = props.data;
    let funClick = () =>{
        count++;
        setCount(count);
    }
    return(
        <div>
            <p>count:{count}</p>
            <input type="button" value="click" onClick={funClick} ></input>
            {
              data1.map((x)=>(
                <p>{x.name}</p>
              ))  
            }
        </div>
    )
}
export default Practise;