import { useEffect, useRef } from "react";

function Previous_Props(Props) {
    let last_Value = useRef()
    useEffect(() => {
        last_Value.current = Props.value
    })
    let previous_Value = last_Value.current
    return (
        <div>
            <h1>Current Value = {Props.value}</h1>
            <h2>Previous Value = {previous_Value}</h2>
            <br />
            <br />
            <br />
            <h2>Different Value {Props.value - previous_Value}</h2>
        </div>
    )
}

export default Previous_Props;