import React from "react"


function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <hr />
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                priority={props.item.priority}
                onChange={() => props.handleChange(props.item.id)}
            />
            
            <p style={props.item.completed ? completedStyle : null}>
                <h3>{props.item.text}</h3> 
                Priority: {props.item.priority}</p>
        </div>
    )   
}

export default TodoItem