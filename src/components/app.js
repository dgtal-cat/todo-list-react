import React, {Component} from "react";

import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";
import Footer from "./footer";

import "./app.css"

export default class App extends Component {

   //my own little id generator
   idGenerator = () => {
      return Math.floor(100000 * Math.random())
   }

   state = {
      todos: [
         this.createTask("Drink coffee"),
         this.createTask("Make Awesome App"),
         this.createTask("Have a lunch")
      ],
      filter: 'All'
   }

   createTask(label) {
      return {
         id: this.idGenerator(),
         label,
         created: Date.now(),
         done: false,
         editing: false,
         show: true
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

   editTask = (id) => {
      this.setState(({todos}) => {
         const newTodos = todos.map((task) => {
            return task.id === id ? {...task, editing: true} : task
         })
         return {
            todos: newTodos
         }
      })
   }

   saveEditedTask = (id, newLabel) => {
      this.setState(({todos}) => {
         const editedTasksList = todos.map((task) => {
            return task.id === id ? {...task, label: newLabel, editing: false, created: Date.now()} : task
         })
         console.log(`Label for Task with id ${id} changed to: ${newLabel}`)

         return {
            todos: editedTasksList
         }
      })
   }


   deleteTask = (id) => {
      this.setState(({todos}) => {
         const index = todos.findIndex((task) => task.id === id)

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
         const newTodos = todos.map((task) => {
            if (task.id === id) {
               task.done = !task.done
               console.log(`Task with id ${id}: done status is ${task.done}`)
            }
            return task
         })
         return {
            todos: newTodos
         }
      })
   }

   clearCompleted = () => {
      this.setState(({todos}) => {
         let newTodos = []
         todos.forEach((el) => {
            if (!el.done) newTodos.push(el)
         })
         return {
            todos: newTodos
         }
      })
   }

   setFilter = (filter) => {
      this.setState(({todos}) => {
         let newTodo = []
         // eslint-disable-next-line default-case
         switch (filter) {
            case 'All' :
               newTodo = todos.map((task) => {
                  task.show = true
                  return task
               })
               console.log('filter: selected All')
               break
            case 'Active':
               newTodo = todos.map((task) => {
                  task.show = !task.done;
                  return task
                  })
               console.log('filter: selected Active')
               break
            case 'Completed':
               newTodo = todos.map((task) => {
                  task.show = !!task.done;
                  return task
               })
               console.log('filter: selected Completed')
               break
         }
         return {
            todos: newTodo,
            filter: filter
         }
      })
   }

   render() {
      const todoCount = this.state.todos.filter((el) => !el.done).length
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
                     onEditTask={this.editTask}
                     onSaveTask={this.saveEditedTask}
                  />
                  <Footer
                  todoCount={todoCount}
                  onClearCompleted={this.clearCompleted}
                  filter={this.state.filter}
                  setFilter={this.setFilter}
                  />
               </section>
            </section>
         </div>
      )
   }
}