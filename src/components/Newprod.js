import { useRef } from "react";
import { json } from "react-router-dom";

function Newprod(){

    let idref = useRef();
    let title = useRef();
    let describe = useRef();

    async function funinsert(){
        let obj = {
            id:idref.current.value,
            title:title.current.value,
            description:describe.current.value
        }
        var result = await fetch("https://dummyjson.com/products/add",
        {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{"Content-Type":"application/json"}
        }
        );
        var out = await result.json();
        console.log(out);
    }

    return(
        <>
        <form>
            <input type="text" placeholder="id" ref={idref}></input><br></br>
            <input type="text" placeholder="title" ref={title}></input><br></br>
            <input type="text" placeholder="description" ref={describe}></input><br></br>
            <input type="button" value="insert" onClick={funinsert}></input><br></br>
        </form>
        </>
    )
}
export default Newprod;