function Student(props) {
    let styles = {
        backgroundColor: "lightgray",
        margin: '20px',
        padding: "20px",
        textAlign: "center",
        borderRadius: "50px"
    }
    return (
        <div style={styles}>
            <h2>Hello....{props.name}</h2>
            <h3>{props.email}</h3>
        </div>
    )
}

export default Student;