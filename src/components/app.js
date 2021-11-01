import React, {Component} from "react";

import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";
import Footer from "./footer";

import "./app.css"

export default class App extends Component {
   state = {
      todos: [
         {id: 1, description: "Drink coffee", created: "created 17 seconds ago", done: true},
         {id: 2, description: "Make Awesome App", created: "created 5 minutes ago", done: false},
         {id: 3, description: "Have a lunch", created: "created yesterday", done: false}
      ]
   }

   deleteTask = (id) => {
      this.setState(({todos}) => {
         const index = todos.findIndex((el) => el.id === id)

         const newTodos = [
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
         ]

         return {
            todos: newTodos
         }
      })
   }

   onToggleDone = (id) => {
      this.setState(({todos}) => {
         const newTodos = todos.map((item) => {
            if (item.id === id) {
               item.done = !item.done
            }
            return item
         })

         return {
            todos: newTodos
         }
      })
   }

   render() {
      return (
         <div>
            <section className="todoapp">
               <header className="header">
                  <h1>todos</h1>
                  <NewTaskForm />
               </header>
               <section className="main">
                  <TaskList
                     todos={this.state.todos}
                     onDelete={this.deleteTask}
                     onDone={this.onToggleDone}
                  />
                  <Footer />
               </section>
            </section>
         </div>
      )
   }
}