import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Page() {
    const theme = useContext(ThemeContext)
    return <h2>Current Theme : {theme}</h2>
}

export default ThemeContext;