// import { useState } from 'react/cjs/react.development';
import './App.css';
import Reuse from './MyPracticeComponent/Reuse';

import Child from './MyPracticeComponent/Child'
import { useEffect, useMemo, useRef, useState } from 'react';

import ForwardRef from './MyPracticeComponent/ForwardRef';

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



// Nested List in React  07-10-21


// import Table from 'react-bootstrap/Table'


// function App() {
//   const user = [
//     {
//       name: 'Suleman', Contact: '0333', email: 'suleman@gmail.com', address: [
//         {
//           House_No: '101', City: 'karachi', area: 'ranchorlain', country: 'pakistan'
//         },
//         {
//           House_No: '102', City: 'karachi', area: 'yhain-karachi', country: 'pakistan'
//         },
//         {
//           House_No: '103', City: 'karachi', area: 'pak', country: 'pakistan'
//         },
//         {
//           House_No: '104', City: 'karachi', area: 'karib', country: 'pakistan'
//         }
//       ]
//     },
//     {
//       name: 'Rehmatullah', Contact: '0341', email: 'rehmat@gmail.com', address: [
//         {
//           House_No: '505', City: 'punjab', area: 'saddar', country: 'pakistan'
//         },
//         {
//           House_No: '506', City: 'pun', area: 'sarr', country: 'pakistan'
//         }
//         ,
//         {
//           House_No: '507', City: 'pun', area: 'sar', country: 'pakistan'
//         }
//       ]
//     },
//     {
//       name: 'Arshad', Contact: '0311', email: 'arshad@gmail.com', address: [
//         {
//           House_No: '801', City: 'lahore', area: 'pakistan-chowk', country: 'pakistan'
//         },
//         {
//           House_No: '802', City: 'la', area: 'pak-cho', country: 'pakistan'
//         },
//         {
//           House_No: '803', City: 'karachi', area: 'pc', country: 'pakistan'
//         },
//         {
//           House_No: '804', City: 'karachi', area: 'paavcc', country: 'pakistan'
//         }
//       ]
//     },
//     {
//       name: 'Ehsan', Contact: '05565', email: 'ehsan@gmail.com', address: [
//         {
//           House_No: '909', City: 'karachi', area: 'metha-dar', country: 'pakistan'
//         },
//         {
//           House_No: '910', City: 'ka', area: 'metha', country: 'pakistan'
//         },
//         {
//           House_No: '911', City: 'ka', area: 'metha', country: 'pakistan'
//         }
//       ]
//     }, {
//       name: 'Jhangir', Contact: '56681', email: 'jhangir@gmail.com', address: [
//         {
//           House_No: '589', City: 'karachi', area: 'netijeti', country: 'pakistan'
//         },
//         {
//           House_No: '510', City: 'karhi', area: 'naattt', country: 'pakistan'
//         },
//         {
//           House_No: '511', City: 'kari', area: 'neti', country: 'pakistan'
//         },
//         {
//           House_No: '512', City: 'kar', area: 'net', country: 'pakistan'
//         }
//       ]
//     }
//   ]

//   return (
//     <div className="App">
//       <Table variant="dark">
//         <tbody>
//           <tr>
//             <td>S.no</td>
//             <td>Name</td>
//             <td>Contact</td>
//             <td>Email</td>
//             <td style={{ textAlign: "center" }}>Address</td>
//           </tr>
//           {user.map((v, i) =>
//             <tr>
//               <td>{i + 1}</td>
//               <td>{v.name}</td>
//               <td>{v.Contact}</td>
//               <td>{v.email}</td>
//               <td>
//                 <Table variant="dark" hover>
//                   <tbody>
//                     {
//                       v.address.map((data, i) =>
//                         <tr>
//                           <td>{i + 1}</td>
//                           <td>{"House No # " + data.House_No}</td>
//                           <td>{"City " + data.City}</td>
//                           <td>{"Area " + data.area}</td>
//                           <td>{"Country " + data.country}</td>
//                         </tr>
//                       )
//                     }
//                   </tbody>
//                 </Table>
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   )
// }


// export default App;





// Reuse Component in loop 06-10-21


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
//   ]
//   return (
//     <div className="App">
//       {data.map((v, i) =>
//         <Reuse data={v} />
//       )
//       }
//     </div>
//   )
// }

// export default App;



// Send Data Child to Parent Component 


// function App(){
//   function childSeDataParent(a){
//     alert(a)
//   }
//   return(
//     <div className="App">
//     <Child data={childSeDataParent} />
//     </div>
//   )
// }

// export default App;


// Aanil ka code

// import User from './User'
// function App() {
//   function getName(name)
//   {
//     alert(name)
//   }
//   return (
//     <div className="App">
//       <h1>Lifting State Up</h1>
//       <User getData={getName} />
//     </div>
//   );
// }



//     useMemo Hook     12-10-21


// function App() {
//   const [count, setCount] = useState(0)
//   const [item, setItem] = useState(5)
//   const memoUse = useMemo(function memoFun() {
//     console.log("memo Function chal raha hai");
//     return count * 4
//   }, [count])
//   return (
//     <div className="App">
//       <h2>useMemo Hook in React</h2>
//       <h3>Count : {count}</h3>
//       <h3>Item : {item}</h3>
//       <h3>Function is return count value mutiply : {memoUse}</h3>
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//       <br />
//       <br />
//       <button onClick={() => setItem(item * 5)}>Update Item</button>
//     </div>
//   )
// }
// export default App;

//      useRef Hook In React

// function App() {
//   let inputRef = useRef(null);
//   function handleInput() {
//     console.log(inputRef);
//     inputRef.current.style.backgroundColor = "black";
//     inputRef.current.value = "abdur-rehman"
//     inputRef.current.style.color = "blue"
//     inputRef.current.focus()
//   }
//   return (
//     <div className="App">
//       <input type="text" ref={inputRef} />
//       <br />
//       <br />
//       <button onClick={handleInput}>Handle Input</button>
//     </div>
//   )
// }

// export default App;


// Forward-Ref in React

// import ForwardRef from './MyPracticeComponent/ForwardRef';

// function App() {
//   const inputRef = useRef(null);
//   function handle_forward_ref(){
//     // console.log("Runing...... ");
//     inputRef.current.value="Abdur-Rehman"
//     inputRef.current.style.color="red"
//     inputRef.current.style.backgroundColor="black"
//     inputRef.current.style.border="4px solid red"
//     inputRef.current.style.borderRadius="10px"
//     inputRef.current.style.textAlign="center"
//   }
//   return (
//     <div className="App">
//       <h2>Forward Ref In React</h2>
//       <ForwardRef ref={inputRef}/>
//       <br />
//       <br />
//       <button onClick={handle_forward_ref}>Update</button>
//     </div>
//   )
// }

// export default App;

// Controlled Component

// function App() {
//   let [val, setVal] = useState()
//   return (
//     <div className="App">
//       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} name="" id="" />
//       <h2>Value : {val}</h2>
//     </div>
//   )
// }
// // Jo state k sth input handle ho wo Controlled Component kehla ta hai.....!! 

// export default App;


// input Access krne ka dusra tarika 

// function App() {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)
//   function getValue(e) {
//     setData(e.target.value)
//     setPrint(false)
//   }
//   return (
//     <div className="App">
//       <h1>Input Access in React</h1>
//       <br />
//       {
//         print ?
//         <h1>Input Value : {data}</h1>
//         :
//         null
//       }
//       <input type="text" onChange={getValue} /><br /><br />
//       <button onClick={() => setPrint(true)}>Print Value</button>
//     </div>
//   )
// }

// export default App;


//    Uncontrolled Component 


// function App() {
//   let inputRef = useRef(null)
//   let inputRef2 = useRef(null)
//   function handle_form(e) {
//     e.preventDefault()
//     console.log("First Input Value : " + inputRef.current.value)
//     console.log("Second Input Value : " + inputRef2.current.value)
//     let input_with_id = document.getElementById("input_3").value
//     console.log("Three Input Value : " + input_with_id)
//   }
//   return (
//     <div className="App">
//       <h1>Uncontrolled Component In React</h1>
//       <form action="" onSubmit={handle_form}>
//         <input ref={inputRef} type="text" name="" id="" />
//         <br />
//         <br />
//         <input ref={inputRef2} type="text" name="" id="" />
//         <br />
//         <br />
//         <input id="input_3" type="text" name="" />
//         <br />
//         <br />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// ye without state handle krte hen 

// export default App;


//           13-10-21

// Hight Order Component (HOC)


// function App() {
//   return (
//     <div className="App">
//       <HOCBlue cmp={Counter} />
//       <HOCRed cmp={Counter} />
//       <HOCGreen cmp={Counter} />
//     </div>
//   )
// }

// function HOCBlue(props) {
//   return <h2 style={{ width: 140, backgroundColor: "blue" }}>Blue <props.cmp /></h2>
// }


// function HOCRed(props) {
//   return <h2 style={{ width: 140, backgroundColor: "red" }}>Red <props.cmp /></h2>
// }


// function HOCGreen(props) {
//   return <h2 style={{ width: 140, backgroundColor: "green" }}>Green <props.cmp /></h2>
// }
// function Counter() {
//   const [count, setCount] = useState(0)
//   return <div>
//     <h4>{count}</h4>
//     <button onClick={() => setCount(count + 1)}>Update</button>
//   </div>
// }


// export default App;




function App(){
  return(
    <div className="App">
      Hellooo
    </div>
  )
}

export default App;