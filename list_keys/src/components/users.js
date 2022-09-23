import React from "react";

const user = (props) =>{

return(
<li>
    <span>Name: {props.children} | Age: {props.age}</span>
    <input onChange={props.changeEvent} value={props.children} name="changeName" />
    <button onClick={props.delEvent}>Delete</button>
</li>
);

}

export default user;