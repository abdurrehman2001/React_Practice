// import { useState } from 'react'
// function Login() {
//     const [user, setUser] = useState()
//     const [password, setPassword] = useState()
//     const [userErr, setUserErr] = useState()
//     const [passErr, setPassErr] = useState()
//     function HandleForm(e) {
//         // alert("Your Form Submit")
//         if (user == "" || password == "") {
//             alert("Plz Enter SomeThing")
//         }
//         else {
//             alert("All Good :)")
//         }
//         e.preventDefault()
//     }
//     function userHandle(e) {
//         let val = e.target.value;
//         if (val.length < 4) {
//             setUserErr(true)
//         }
//         else {
//             setUserErr(false)
//         }
//         setUser(val)
//         console.log(e.target.value);
//         console.log(e.target.value.length);
//     }
//     function userPassword(e) {
//         let val = e.target.value;
//         if (val.length < 6) {
//             setPassErr(true)
//         }
//         else {
//             setPassErr(false)
//         }
//         setPassword(val)
//         console.log(e.target.value);
//     }
//     return (
//         <div style={{ marginTop: "70px" }}>
//             <form onSubmit={HandleForm}>
//                 <input type="text" name="" id="" onChange={userHandle} placeholder="Enter Name" />
//                 <br />
//                 {userErr ? <h3>Enter Must Five Character</h3> : ""}
//                 <br />
//                 <input type="password" name="" id="" onChange={userPassword} placeholder="Enter Password" />
//                 <br />
//                 {passErr ? <h3>Enter Must Six Character</h3> : ""}
//                 <br />
//                 <button  >Login</button>
//             </form>
//         </div>
//     )
// }
// export default Login;