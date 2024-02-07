import React, { useState } from "react";
import "./Add_Task.css";

const Add_Task = () => {
    const [values,setvals] = useState("");

    const setter = (e) => {
        setvals(e.target.value);
        console.log(e.target.value)
    }

    const setstorage = () => {
        let inn = JSON.parse(localStorage.getItem("za_data")) || [];
        inn.push(values);
        localStorage.setItem("za_data",JSON.stringify(inn));
        setvals("");
    }
    return(
        <>
        <div className="Add_Task">
            <input type="text" className="point" value={values} onChange={setter}/>
            <button onClick={setstorage}>
                ADD
            </button>
        </div>
        </>
    )
}

export default Add_Task;