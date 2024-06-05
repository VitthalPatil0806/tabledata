
import { useState } from 'react';
import './App.css';
import './components/Practise'
import Practise from './components/Practise';
import Form from './components/Form';
import Display from './components/Display';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Records from './components/Records';

var arr = [{id:1,name:"vitthal",marks:98.80},{id:2,name:"udhav",marks:99.70},{id:3,name:"harsh",marks:100}];

function App() {

  let [show,setShow] = useState(false);
  function funShow(){
    setShow(!show)
  }

  return (
  // <>
  //   <table>
  //     <thead>
  //       <tr>
  //         <td>Id</td>
  //         <td>Name</td>
  //         <td>Marks</td>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {arr.map(element=>(
  //         <tr>
  //           <td>{element.id}</td>
  //           <td>{element.name}</td>
  //           <td>{element.marks}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
    
  //   <input type='button' value="show" onClick={funShow}></input>
  //   {
  //     show && <Practise data={arr}/>
  //   }
  <>
    <Home/>
    <Routes>
      <Route path='/records' Component={Records}></Route>
    </Routes>
  </>
  );
}

export default App;
