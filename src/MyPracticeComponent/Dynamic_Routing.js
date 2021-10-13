import {withRouter} from 'react-router-dom'

function Dynamic_Rounting(props){
    console.log(props.match)
    return(
        <div>
            <h1>My i.d is {props.match.params.id}</h1>
            <h2>User name is {props.match.params.name}</h2>
            <h4>user_email : {props.match.params.email}</h4>
        </div>
    )
}

export default withRouter(Dynamic_Rounting);