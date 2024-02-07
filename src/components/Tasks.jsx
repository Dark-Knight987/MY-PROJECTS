import React, { useEffect, useState } from "react";
import "./Tasks.css"

const Tasks = () => {
    const [values,setvals] = useState("");

    const setter = (e) => {
        setvals(e.target.value);
    }

    const setstorage = () => {
        let inn = JSON.parse(localStorage.getItem("za_data")) || [];
        inn.push(values);
        localStorage.setItem("za_data",JSON.stringify(inn));
        setvals("");
    }

    const [state,setstate] = useState(0);
    const [storage,setzastorage] = useState([]);

    useEffect(() => {
        var data_in = JSON.parse(localStorage.getItem("za_data")) || [];
        setzastorage(data_in);
    },[state,values]);

    const dropper = (e) => {
        var new_data = JSON.parse(localStorage.getItem("za_data"));
        let tar = parseInt(e.target.id);
        new_data = new_data.filter(function(valuez,keyz){
            if(keyz !== tar){
                return valuez;
            }
        });
        localStorage.setItem("za_data",JSON.stringify(new_data));
        setzastorage(new_data);
        setstate(0);
    }
   
    return(
        <>
        <div className="Add_Task">
            <input type="text" className="point" value={values} onChange={setter}/>
            <button onClick={setstorage}>
                ADD
            </button>
        </div>
        <div className="tasks">
            <ul>
            {
                storage.map((vals,id_key) => {
                    return (<li key={id_key} ><p>{vals}</p><button id={id_key} onClick={dropper}>DROP</button></li>)
                })
            }
            </ul>
        </div>
        </>
    )
}

export default Tasks;