import React, { Component } from "react";
import User from "./user";

class Users extends Component {

        state = {
            users: [
                {name: 'Jhon', age: 20},
                {name: 'deo', age:25},
                {name: 'test', age:30},
                {name: 'sagar', age:10},
                {name: 'Test1', age:15},
                {name: 'test', age:14}
            ],
            title: "Users List"
        }

        // Not recommended Method for update state

        // updateAge = () =>{
        //     this.setState({
        //         users: [
        //             {name: 'Jhon', age: 10},
        //             {name: 'deo', age:20},
        //             {name: 'test', age:10}
        //         ]
        //     })

        //     console.log(this.state);

        //recommended
        updateAge= () =>{
            const newAge = this.state.users.map((user) => {
                const tempUser = user;
                tempUser.age -= 5;
                if(tempUser.age >= 15){
                 return tempUser;   
                }else{
                    tempUser.age += 5;
                    return tempUser;
                }
            });

            this.setState({
                newAge
            });
        }

    render(){
        return(
            <div>
                {/* <p>Its a class Component</p> */}
                <h4>{this.state.title} </h4>
                    {/* Not Recommended */}
                {/* <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User> */}

                {/* Recommended */}

                {
                    this.state.users.map((user) => {
                        return (
                        <User age={user.age}>{user.name}</User>
                        );

                    })
                }

                <br />
                <button onClick={this.updateAge}>Update Age</button>
            </div>
        );
    }

}   

export default Users;