import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ToggleTheme } from "../App";

function Task(){

    const[state, setState]=useState(0);
    const [content, setContent] = useState(false);

    const theme = useContext(ToggleTheme);
    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem",
    }

    useEffect(()=>{
        alert("Content button Clicked")
        },[content])

    const handleContent = () => {
        setContent((prevContent) => !prevContent);
        };
        
    const handleLike = () => {
        setState((prevState) => prevState + 1);
        };

    return(
        <div style={themeStyle}>
            <div style={{ padding: "20px" }}>
            {content && "Hello, Im Yuvashree currently undergoing Kalvium PJLI"} 
            </div>
            <button onClick={handleContent}>Content</button>
            <div style={{ padding: "20px" }}>
                {state}
            </div>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default Task;