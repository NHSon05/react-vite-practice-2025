 import { useContext } from "react";
import {ThemeContext} from './ThemeContext'
import Context from "./context";


// Theme: Dark/Light


//  1. Create context
//  Tạo ra phạm vi để truyền dữ trong phạm vi đó


//  2. Provider
//  3. Consumer
function UseContest(){
    const context = useContext(ThemeContext)

    return(
            <div>
                <button style={{margin: 20}} onClick={context.toggleTheme}>Toggle theme</button>
                <Context/>
            </div>
    )
}

export default UseContest