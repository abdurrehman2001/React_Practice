import { useContext } from "react";
import Text_Color from "../../Context/Index";

function Third_Child() {
    let { app_color, fun } = useContext(Text_Color)
    let name = "Khan"
    return (
        <div>
            <h1 style={{ color: app_color }}>Third Child Components</h1>
            <button onClick={() => fun(name)}>Click</button>
        </div>
    )
}
export default Third_Child;