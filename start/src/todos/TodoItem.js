import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        return (
            <li className={styles.item}>
                <input type="checkbox"
                    className={styles.checkbox}
                    checked={this.props.todo.completed}
                    onChange={() => this.props.checkBoxProps(this.props.todo.id)} />

                <span style={this.props.todo.completed ? completedStyle : null}>
                    {this.props.todo.title}
                </span>
                <button
                    onClick={() => this.props.removeTodoProps(this.props.todo.id)}>
                    Remove</button>

            </li>
        )
    }
}

export default TodoItem