import React, { Component } from "react";
import User from "./user_es";

class Users extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <User>Software Engineer</User>
                <User title="jill" age="30">Software Developer</User>
                <User title="peter" age="40">Tester</User>
                <User title="deo" age="50">Designer</User>
            </div>
            
        );

    }
}

export default Users;