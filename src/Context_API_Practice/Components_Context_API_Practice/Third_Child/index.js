import { useContext } from "react";
import Text_Color, { Back_Color } from "../../Context/Index";

function Third_Child() {
    let S = useContext(Text_Color)
    // console.log(My_Name_Import);
    let C = useContext(Back_Color)

    return (
        <div>
            <h1 style={{ color: S, backgroundColor: C }}>Third Child Components</h1>
        </div>
    )
}
export default Third_Child;