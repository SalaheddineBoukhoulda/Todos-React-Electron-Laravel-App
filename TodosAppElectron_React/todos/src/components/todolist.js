import React from 'react';

export default function TodoList({todos, completeTodo, deleteTodo}) {
    const todosList = todos.map((todo) =>{
        return (
        <li key={todo.id} >
            {todo.completed ? <strike>{todo.name}</strike> : todo.name}
            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}>{todo.completed ? '-' : '√'}</button>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>X</button>
            </div>
        </li> 
        );
    });
    return (
        <ul>
            {todosList}
        </ul>
    );
}