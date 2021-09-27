// import { useState } from 'react/cjs/react.development';
import './App.css';
// import { useState, useEffect } from 'react'
// function App() {
//   // const [name, setName] = useState('Bolo')
//   // const [no , setNo] = useState(0)
//   // useEffect(()=>{
//   // },[])

// function abc(){
//   return(
//     <h3>Hello</h3>
//   )
// }



//   return (
//     <div className="App">
//       {/* <h2>{name}</h2>
//       <button onClick={() => setName('Bhai')}>UpDate</button>
//       <h1>{no}</h1>
//       <button onClick={()=> setNo(no + 50)}>Counter</button> */}

//    {/* // {abc()} */}


//     </div>
//   );
// }

// function Ka(){
//   return <h2>Hello Kaka</h2>
// }

// function App() {
//   let a = 'bhalu'
//   function foo (){
//     a = 'abey'
//     alert(a)
//   }
//   return (
//     <>
//     <h1>{a}</h1>
//     <button onClick={foo}>Click</button>
//     <Ka/>
//     </>
//   )
// }


// import { Student, StudentOne } from './MyPracticeComponent'
// // import {useState} from 'react'
// function App() {
//   let styles = {
//     backgroundColor: "lightgray",
//     margin: '20px',
//     padding: "20px",
//     textAlign: "center",
//     borderRadius: "50px"
//   }
//   const [name, setName] = useState("Ahmed")
//   return (
//     <div>
//       <h2>Hello Details Page</h2>
//       <Student name='Bhalu' email='bhalu@gmail.com' /><br />
//       <Student name='Bubun' email='bubun@gmail.com' /><br />
//       <Student name='Chacha' email='chacha@gmail.com' /><br />
//       <div style={styles}>
//         <StudentOne name={name} />
//         <button onClick={() => setName("Mr.Kapadia")}>UpData</button>
//       </div>

//     </div>
//   )
// }


// 22-09-2021

//  Input Access Code ===>

// import { useState } from 'react'
// function App() {
//   const [data, setData] = useState("")
//   const [print, setPrint] = useState("")
//   let getData = (e)=> {
//     console.log(e.target.value)
//     setData(e.target.value)
//     setPrint()
//   }
//   return (
//     <div className="App">
//       { print?
//         <h1 style={{fontFamily:"monospace"}}>{data}</h1>
//       : null
//       }
//       <input type="text" onChange={getData} />
//       <button onClick={setPrint}>Cliclk</button>
//     </div>
//   )
// }


//      Tag Hide & Show 


// import { useState } from 'react'
// function App() {
//   let [status, setStatus] = useState(true)
//   return (
//     <div className="App">
//       {
//       status ?
//         <h1>Abdur Rehman</h1>
//         : null
//       }
//       {/* <button onClick={()=>setStatus(false)} >Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}
//       {/* <button onClick={()=>setStatus(!status)}>Toggle</button> */}
//     </div>
//   )
// }





// function App() {
//   let a = 'Mr.Kapadia';
//   let b = 'Bubun'; 
//   let c = 'Bhalu...!!';
//   return (
//     <div className="App">
//       <p>{`${a} ${c} ${b}`}</p>
//     </div>
//   )
// }



// 27-09-21

// Handle Form | checkbox | input field | select    

// Ye mene apne tarike se kiya hai

// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [place, setPlace] = useState("")
//   const [aG, setAg] = useState(false)
//   function sub() {
//     console.log(name, lastName, place, aG)
//   }
//   return (
//     <div className="App">
//       <h3>From Handle</h3>
//       <form action="" onSubmit={(e) => e.preventDefault()}>
//         <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} name="" id="" /><br /> <br />
//         <input type="text" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} name="" id="" /><br /><br />
//         <select name="" id="" onChange={(e) => setPlace(e.target.value)} >
//           <option>Select Area</option>
//           <option>Burns Road</option>
//           <option>Pakistan</option>
//           <option>Kharadar</option>
//         </select><br /><br />
//         <input type="checkbox" name="" id="" onChange={(e) => setAg(e.target.checked)} />Agree Police
//         <br /><br />
//         <button onClick={sub}>Submit</button>
//       </form>
//     </div>
//   )
// }




//  Ye Anil ka tarika hai neche code wala

// import {useState} from 'react'

// function App() {
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState(false);
//   const [interest,setInterest]=useState("");
//   function getFormData(e)
//   {
//     console.warn(name,tnc,interest)
//     e.preventDefault()
//   }
//   return (
//     <div className="App">
//      <h1>Handle Form in React</h1>
//      <form onSubmit={getFormData}>
//        <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
//        <select onChange={(e)=>setInterest(e.target.value)}>
//          <option>Select Options</option>
//          <option>Marvel</option>
//          <option>DC</option>
//        </select> <br /><br />
//        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
//        <br /><br />
//        <button type="submit">Submit</button>
//        <button>Clear</button>
//      </form>
//     </div>
//   );
// }



// Conditional rendering | If Condition 

// 27-09-2021

// import Condition from './MyPracticeComponent/Condition';
// function App(){
//   return(
//     <div className="App">
//       <Condition />
//     </div>
//   )
// }


// 27-09-2021

// Basic Form validation

// import Login from './MyPracticeComponent/login'
import {useState} from 'react'
function App() {
  let [pri,setPri] = useState()
  function handle(e){
    return(
      setPri(e.target.value)
    )
  }
  return (
    <div className="App">
    {/* <Login placeholderOne={"Enter Your Name"} placeholdertwo={"Enter Your Password"} /> */}
    <input type="text" onChange={handle} name="" id="" />
      <h1>{pri}</h1>
    </div>
  )
}

export default App;
