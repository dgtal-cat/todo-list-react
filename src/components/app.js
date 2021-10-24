import React from "react";

import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";
import Footer from "./footer";

import "./app.css"

const App = () => {
   const todoData = [
      {id: 1, description: "Drink coffee", created: "created 17 seconds ago", completed: true, editing: false},
      {id: 2, description: "Make Awesome App", created: "created 5 minutes ago", completed: false, editing: true},
      {id: 3, description: "Have a lunch", created: "created yesterday", completed: false, editing: false}
   ]

   return (
      <div>
         <section className="todoapp">
            <header className="header">
               <h1>todos</h1>
               <NewTaskForm />
            </header>
            <section className="main">
               <TaskList tasks={todoData} />
               <Footer />
            </section>
         </section>
      </div>
   )
}

export default App