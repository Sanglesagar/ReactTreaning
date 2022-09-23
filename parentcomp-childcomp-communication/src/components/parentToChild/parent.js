import React from "react";
import Child from "./child";
const Parent = (props) =>{

        return(
            <div>
                {/* <Child {...props} /> */}
                <Child doneWhatever={props.changeTheWorldEvent} title={props.title}/>
                <Child doneWhatever ={props.keepTheWorldEvent} title={props.title} />
            </div>
        );
}

export default Parent;