import React, {Component} from "react";

import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";
import Footer from "./footer";

import "./app.css"

export default class App extends Component {
   idGenerator = () => {
      return Math.floor(100000 * Math.random())
   }

   state = {
      todos: [
         this.createTask("Drink coffee"),
         this.createTask("Make Awesome App"),
         this.createTask("Have a lunch")
      ]
   }

   createTask(label) {
      return {
         id: this.idGenerator(),
         label,
         created: Date.now(),
         done: false
      }
   }

   addTask = (text) => {
      const newItem = this.createTask(text)

      console.log("New task created:")
      console.log(newItem)

      this.setState(({todos}) => {
         const newArr = [
            ...todos,
            newItem
         ]

         return {
            todos: newArr
         }
      })
   }

   deleteTask = (id) => {
      this.setState(({todos}) => {
         const index = todos.findIndex((el) => el.id === id)

         const newTodos = [
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
         ]

         console.log(`Task with id ${id} was deleted`)

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
               console.log(`Task with id ${id}: done status is ${item.done}`)
            }
            return item
         })
         return {
            todos: newTodos
         }
      })
   }

   render() {
      const todoCount = this.state.todos.filter((el) =>
         !el.done).length
      return (
         <div>
            <section className="todoapp">
               <header className="header">
                  <h1>todos</h1>
                  <NewTaskForm
                  addTask={this.addTask}/>
               </header>
               <section className="main">
                  <TaskList
                     todos={this.state.todos}
                     onDelete={this.deleteTask}
                     onDone={this.onToggleDone}
                  />
                  <Footer
                  todoCount={todoCount}/>
               </section>
            </section>
         </div>
      )
   }
}