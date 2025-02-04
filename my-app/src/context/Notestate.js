import React from "react";
import notecontext from "./Notecontext";


const Notestate = (props) =>
     {
        const state={
            "name":"Harry",
            "class":"5th"
        }
        return(
            <Notestate.provider value={state}>
                {props.children}
            </Notestate.provider>
        )

}

export default Notestate;