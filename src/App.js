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


import { useState } from 'react'
function App() {
  const [data, setData] = useState("")
  const [print, setPrint] = useState("")
  let getData = (e)=> {
    console.log(e.target.value)
    setData(e.target.value)
    setPrint()
  }
  return (
    <div className="App">
      { print?
        <h2>{data}</h2>
      : null
      }
      <input type="text" onChange={getData} />
      <button onClick={setPrint}>Cliclk</button>
    </div>
  )
}

export default App;
