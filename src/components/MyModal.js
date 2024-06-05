import { useState, useEffect } from "react";
import React from "react";
import { Modal,Button } from "react-bootstrap";

function MyModal(props){

    const[ismodel,setIsModel] = useState(false);
    let closeModel = () => {
        setIsModel(false);
    }

    async  function funUp(){
        let obj = {
            title:txttitle,
        }
   var obj1 =  await fetch('https://dummyjson.com/products/'+txtid, {
  method: 'PUT',
  body: JSON.stringify(obj),
  headers: {'Content-Type':'application/json'}
});

var finalres = await obj1.json();
console.log(finalres);
    }

    async function fundelete(){
        var result = await fetch('https://dummyjson.com/products/'+txtid, {
            method: 'DELETE',
          })
          var fin = await result.json();
          console.log(fin);
    }

    function titlechange(event){
        setTitle(event.currentTarget.value);
    }

    let [txtid,setTxtId] = useState();
    let [txttitle,setTitle] = useState();
    let [txtdescribe,setDescribe] = useState();
    
    console.log(txtid);

   useEffect(()=>{
    setIsModel(true);
    setTxtId(props.datas.id);
    setTitle(props.datas.title);
    setDescribe(props.datas.description);
   },[props]);



    return(
        <>
        <Modal show={ismodel} onHide={closeModel}>
            <Modal.Header closeButton>
                <Modal.Title>Pop Ups</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input type="text" value={txtid}></input><br></br>
                <input type="text" onChange={titlechange} value={txttitle}></input><br></br>
                <input type="text" value={txtdescribe}></input><br></br>
            </Modal.Body>

            <Modal.Footer>
                <input type="button" value="update" onClick={funUp}></input>
                <input type="button" value="delete" onClick={fundelete}></input>
                <Button variant="secondary" onClick={closeModel}>close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default MyModal;