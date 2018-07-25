import React, {Component} from 'react';


class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : ''
        };
        this.add = this.add.bind(this);
    }

    add(){
        this.props.createTodo(this.state.value);
        this.setState({value:''})
    }

    render(){
        return(
            <div className="create-todo">
                <input type="text" 
                    value={this.state.value}
                    placeholder="Add a todo"
                    onChange={(e) => {this.setState({value : e.target.value})}}
                />
                <button onClick={this.add}> </button>
            </div>
        );
    }
}

export default AddTodo;