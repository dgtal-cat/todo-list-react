import React from "react";

import Task from "./task";

import "./task-list.css"

const TaskList = ({ tasks }) => {
   const elements = tasks.map((item) => {
      const {id, ...taskProps} = item;
      let elementStyle = ""

      if (item.editing) { //временное условие для проверки отображения стиля для редактируемой задачи
         elementStyle = "editing"
         return (
            <li key={id} className={elementStyle}>
               <Task {...taskProps} />
               <input type="text" className="edit"/>
            </li>
         )
      } else if (item.completed) {
         elementStyle = "completed"
         return (
            <li key={id} className={elementStyle}>
               <Task {...taskProps} />
            </li>
         )
      } else return (
         <li key={id} className={elementStyle}>
            <Task {...taskProps} />
         </li>
      )
   })

   return (
      <ul className="todo-list">
         {elements}
      </ul>
   )
}

export default TaskList