import React, {Component} from "react";
import Task from "./task";
import "./task-list.css"

export default class TaskList extends Component {

   render() {
      const {todos, onDelete, onDone, onEditTask, onSaveTask} = this.props;
      const elements = todos.map((item) => {
         const {id, done, editing, show, ...taskProps} = item;
         let styleClass = ""
         if (done) {
            styleClass = 'completed'
         } else if (editing) {
            styleClass = 'editing'
         } else styleClass = ''

         if (!show) styleClass += ' hidden'

         return (
            <li key={id} className={styleClass}>
               <Task {...taskProps}
                     id={id}
                     done={done}
                     editing={editing}
                     onDelete={() => onDelete(id)}
                     onDone={() => onDone(id)}
                     onEditTask={(id) => onEditTask(id)}
                     onSaveTask={(id, newLabel) => onSaveTask(id, newLabel)}
               />
            </li>
         )
      })
      return (
         <ul className="todo-list">
            {elements}
         </ul>
      )
   }
}