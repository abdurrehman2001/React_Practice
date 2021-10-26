import { useState } from "react";
import Text_Color from "../../Context/Index";
import First_Child from "../First_Child";
function Parents() {
    const [color, setColor] = useState("red");
    const [name,setName]=useState("Babblu...")
    const get_Date = (i) => {
        console.log(i);
        setName(i)
    }
    // const [color , serColor] = useState("green")
    return (
        <Text_Color.Provider value={{ app_color: color, fun: get_Date }}>
            <div>
                <h1>Parents Components</h1> 
                <h3>{name}</h3>

                <First_Child />
            </div>
        </Text_Color.Provider>
    )
}
export default Parents;