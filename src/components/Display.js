import { useState } from "react";
import Updform from "./Updform";
import MyModal from "./MyModal";

function Display(props){
let val = props.data;
let [upval,setUpVal] = useState({});
let [flag,setFlag] = useState(false);
let[arr,setArr] = useState(props.data);


function funUpd(xval){
    setUpVal(xval);
    setFlag(!flag);
}


function funSort(event){
    event.preventDefault();
    setArr(val.sort((x,y)=>x.price-y.price))
}

    return(
        <>
        <table>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td><a href="" onClick={funSort}>Price</a></td>
            </tr>
            {
                val.map((x)=>(
                    <tr key={x.id} onClick={()=>{funUpd(x)}}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>{x.price}</td>
                    </tr>
                ))
            }
        </table>
        <Updform datas={upval}/>

        {
            flag && <MyModal datas={upval}/>
        }
        </>
    )
}
export default Display;