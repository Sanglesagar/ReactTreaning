import React, { Component } from "react";

 class AddTodo extends Component {
    constructor()
    {
        super();
        this.input = React.createRef();
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.input} />
                <button onClick={(e) => this.handleClick(e)}>Add</button>
            </div>
        );
    }

    handleClick(e) {
        const node = this.input.current;
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}

export default AddTodo;