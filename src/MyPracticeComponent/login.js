import { useState } from 'react'
function Login({ placeholderOne, placeholdertwo }) {
    const [user ,setUser] = useState()
    const [password ,setPassword] = useState()
    function HandleForm(e) {
        e.preventDefault()
    }
    function handleUser(e){
        console.log(e.target.value)
    }
    function handlePassword(e){
        console.log(e.target.value)
    }
    return (
        <div style={{ marginTop: "70px" }}>
            <form onSubmit={HandleForm}>
                <input type="text" name="" id="" onChange={handleUser} placeholder={placeholderOne} /><br /><br />
                <input type="text" name="" id="" onChange={handlePassword} placeholder={placeholdertwo} /><br /><br />
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;