import React from "react"
import styles from "./TodoItem.module.css"
import styled from 'styled-components'

const ItemSection = styled.span`
    ${props => props.finished && ({
        fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through"
     })
    }`

class TodoItem extends React.Component {

    render() {


        return (
            <li className={styles.item}>

                <input type="checkbox"

                    className={styles.checkbox}
                    checked={this.props.todo.completed}
                    onChange={() => this.props.checkBoxProps(this.props.todo.id)} 
                    
                    />

                <ItemSection finished={this.props.todo.completed} >
                    {this.props.todo.title}
                </ItemSection>
                
                <button
                    onClick={() => this.props.removeTodoProps(this.props.todo.id)}>
                    Remove</button>
            </li>
        )
    }
}

export default TodoItem