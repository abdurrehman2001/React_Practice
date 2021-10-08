function Reuse(props) {
    return (
        <div>
            <span>Name : {props.data.name} </span>
            <span>Email : {props.data.email} </span>
            <span>Contact : {props.data.contact} </span>
            <span>City : {props.data.city} </span>
        </div>
    )
}

export default Reuse;