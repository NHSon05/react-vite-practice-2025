import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
function Paragraph(){
    const context = useContext(ThemeContext)

    return(
        <p className={context.theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis totam nisi aliquam dolorem necessitatibus hic doloribus,
            consectetur molestias animi nihil distinctio in voluptatibus eveniet amet repellendus? Modi, sapiente mollitia.</p>
    )
}

export default Paragraph