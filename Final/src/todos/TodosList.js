import React from "react" ;

import TodoItem from "./TodoItem"


class TodosList extends React.Component
{
    render()
    {
        return(
            <ul>
                {
                    this.props.todos.map(todo => (
                        <TodoItem key={todo.id} todo = {todo} 
                        checkBoxProps = {this.props.checkBoxProps}
                        removeTodoProps = {this.props.removeTodoProps}/>)
                    )}
            </ul>
        )
    }
}

export default TodosList