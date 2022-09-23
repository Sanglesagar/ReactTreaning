import React from "react";

const User = (props) => {
    let title = props.title ? props.title : 'NA';
    let age = props.age ? props.age : 'NA';
    let children = props.children ? props.children : 'NA';

    return (

        <div>
            <h4>Name: {title} | Age: {age} | Desination: {children}</h4>
        </div>
    );
}

export default User;