import { useEffect, useState } from "react";
import Display from "./Display";
import Newprod from "./Newprod";

function Records(props){

    let [val,setVal] = useState([]);
    let [prod,setProd] = useState(false);
    let url = ""

    function funadd(){
        setProd(!prod);
    }

    function funclick(event){
        event.preventDefault();
        if(event.currentTarget.textContent == 2){
            Record(2);
        }
        else if(event.currentTarget.textContent == 3){
            Record(3);
        }

    }


    async function Record(pgno){
        let pgnos = pgno;
        url = ""

        if(pgnos == 1){
            url = 'https://dummyjson.com/products?limit=10&skip=0';
        }
        else if(pgnos == 2){
            url = 'https://dummyjson.com/products?limit=10&skip=10';
        }
        else if(pgnos == 3){
            url = 'https://dummyjson.com/products?limit=10&skip=20';
        }

        var result = await fetch(url);
        var vals = await result.json();
        setVal(vals.products);
        console.log(val);
    }

    useEffect(()=>{
        Record(1);
    },[])

    return(
        <>
        <Display data={val}/>
        <ul>
            <li><a href="" onClick={funclick}>2</a></li>
            <li><a href="" onClick={funclick}>3</a></li>
        </ul>
        <input type="button" value="add" onClick={funadd}></input>
        {
            prod && <Newprod/>
        }
        </>
    )
}
export default Records;