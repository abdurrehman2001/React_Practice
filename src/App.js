// import { useState } from 'react/cjs/react.development';
import './App.css';
// import Table from 'react-bootstrap/Table'
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
// function App() {
//   return (
//     <div className="App">
//     <Login />
//     </div>
//   )
// }


// 29-09-2021

// Pass Function as Props

// import Sent from './MyPracticeComponent/Sent';

// function App(){
//   function foo (){
//     alert("Hello I Am Perent Function")
//   }
//   return(
//     <div className="App">
//       <h1>Props pass Function</h1>
//       <Sent fun={foo} />
//     </div>
//   )
// }


//  UseEffect   05-10-21 without Props neche props k sth hai


// import { useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(10)
//   const [data, setData] = useState(100)

//   useEffect(() => {
//     alert("count is : " + count)
//   }, [count])
// useEffect(()=>{
//   console.log('data is :' + data);
// },[data])
//   return (
//     <div className="App">
//       <h1>Use Effect</h1>

//       <h2>Count is : {count} </h2>
//       <h2>Data is : {data}</h2>
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//       <button onClick={() => setData(data + 1)}>Updata Data</button>

//     </div>
//   )
// }

// export default App;



// useEffect with Props

// import { useState } from 'react';
// import EffectWithProps from './MyPracticeComponent/EffectWithProps'
// function App() {
//   const [count, setCount] = useState(10)
//   const [data, setData] = useState(100)
//   return (
//     <div className="App">
//       <h1>Use Effect</h1>
//       <EffectWithProps count={count} data={data} />
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//       <button onClick={() => setData(data + 1)}>Updata Data</button>

//     </div>
//   )
// }

// export default App;


//  Style In React 3 ways

// import './MyPracticeComponent/style.css'
// import style from './MyPracticeComponent/custom.module.css'
// function App(){
//   return(
//     <div className="App">
//       <h1 className="design">Hello World</h1>
//       <h1 style={{backgroundColor:"black",color:"red" ,border:"4px solid red" , padding:"12px"}}>Hello World</h1>
//       <h1 className={style.oyee}>Hello World</h1>
//     </div>
//   )
// }

// export default App;




// Bootstrap OR React-Bootstrap in react


// import Buttons from './Library-practice/Button';
// import Alerts from './Library-practice/alert';
// import Aaaa from './Library-practice/Close'
// function App(){
//   return(
//     <div className="App">
//       <Buttons onClick={()=>alert("HELLO WORLD")}>Click</Buttons>
//     <Alerts />
//     <Aaaa />
//     </div>
//   )
// }

// export default App;


// Array with map function & map in table 
//  for loop trying


// function App() {
//   const arr = ['ar', 'rafay', 'abdullah', 'umair', 'razzak']
//   arr.map((v) => console.log("i am map function " + v))

//   for (var i = 0; i < arr.length; i++) {
//     console.log("i am for-loop " + arr[i])
//   }

//   const data = [
//     {
//       name: "abdur-rehman", email: "ar@testing.com", contact: "0321"
//     },
//     {
//       name: "abdullah", email: "abdullah@testing.com", contact: "0331"
//     },
//     {
//       name: "hammad", email: "hammad@testing.com", contact: "0341"
//     }
//   ]
//   return (
//     <div className="App">
{/* {arr.map((v) => 
      <h3>{v}</h3>
      )} */}

{/* {
        data.map((v)=><h2>{v.name}</h2>)
      } */}

//  map in table

{/* <table border='1'> 
        <tr style={{border:"2px solid red"}}>
          <td style={{border:"2px solid red"}}>Name</td>
          <td style={{border:"2px solid red"}}>Email</td>
          <td style={{border:"2px solid red"}}>Contact</td>
        </tr>
        {
        data.map((v) =>
          <tr>
            <td>{v.name}</td>
            <td>{v.email}</td>
            <td>{v.contact}</td>
          </tr>
        )
        }
      </table>
    </div>
  )
} */}



// export default App;


//  list with bootstrap and conditional


// function App() {
//   const data = [
//     {
//       name: 'Danish', email: "danish@gmail.com", contact: "021", city: "karachi"
//     },
//     {
//       name: 'Daniyal', email: "daniyal@gmail.com", contact: "021", city: "karachi"
//     },
//     {
//       name: 'Riyaz', email: "riyaz@gmail.com", contact: "023", city: "karachi"
//     },
//     {
//       name: 'Ibrahim', email: "ibrahim@gmail.com", contact: "026", city: "karachi"
//     },
//     {
//       name: 'Razzak', email: "razzak@gmail.com", contact: "021", city: "karachi"
//     },
//   ]
//   return (
//     <div className="App">
//       <Table striped hover variant="warning">
//         <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contact</td>
//           <td>City</td>
//         </tr>
//         {
//           data.map((v, i) =>
//           v.contact === "021"?
//             <tr key={i}>
//               <td>{v.name}</td>
//               <td>{v.email}</td>
//               <td>{v.contact}</td>
//               <td>{v.city}</td>
//             </tr>
//             :
//             null
//           )
//         }
//         </tbody>
//       </Table>
//     </div>
//   )
// }


// export default App;



function App(){
  return(
    <div className="App">
hello
    </div>
  )
}


export default App;