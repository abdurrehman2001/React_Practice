import { useState } from "react";
import Text_Color from "../../Context/Index";
import First_Child from "../First_Child";
import { Back_Color } from "../../Context/Index";
function Parents() {
    let C = "red";
    let B = "black"
    // const [color , serColor] = useState("green")
    return (
        <Text_Color.Provider value={C}>
            <Back_Color.Provider value={B}>
                <div>
                    <h1>Parents Components</h1>
                    <First_Child />
                </div>
            </Back_Color.Provider>
        </Text_Color.Provider>
    )
}
export default Parents;