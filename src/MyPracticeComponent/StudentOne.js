function StudentOne(props){
    let styles = {
        backgroundColor: "lightgray",
        margin: '20px',
        padding: "20px",
        textAlign: "center",
        borderRadius: "50px"
    }
    return(
        <h2>Hi...........{props.name}</h2>
    )
}
export default StudentOne;