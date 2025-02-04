import React from "react";
import notecontext from "./notecontext";


const Notestate = (props) =>
     {
        const state={
            "name":"Harry",
            "class":"5th"
        }
;

        return(
            <notecontext.Provider value={state}>
                {props.children}
            </notecontext.Provider>
        )



}

export default Notestate;