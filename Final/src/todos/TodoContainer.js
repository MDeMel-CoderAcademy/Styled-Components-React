import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"

 import "./App.css"


const TestComp = () => {
    return (
        <h1>Hello Here's a Todo App</h1>
    )
}

class TodoContainer extends React.Component
{
    count = 1;
    state = {
        todos: [
          {
            id: this.count++,
            title: "Setup development environment",
            completed: true
          },
          {
            id: this.count++ ,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: this.count++ ,
            title: "Deploy to live server",
            completed: false
          }
        ],




       };


    addTodoItem = title => {
        const newTodo = {
            id: this.count++,
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
    };

    todocheck = (keytag) => {
        this.setState(prevState => ({
            todos : prevState.todos.map(todo => {
                if (todo.id === keytag)
                return {
                    ...todo,
                    completed: !todo.completed,
                  }
                return todo;
            }),
        }))

    }

    removeTodo = (keytag) => {
       this.setState({
           todos: [
               ...this.state.todos.filter(todo => {
                   return todo.id !== keytag;
               })
           ]
       });
    };




    render() {
        return (
            <>
           <center style = {{marginTop:50}}><TestComp  /></center>
           <div className="container">
           <div className="inner">
           <InputTodo addTodoProps={this.addTodoItem} />
           <Header />
           <TodosList todos = { this.state.todos }
            checkBoxProps = {this.todocheck}
            removeTodoProps = {this.removeTodo}/>
            </div>
            </div>
           </>
        );
    }
}



export default TodoContainer
