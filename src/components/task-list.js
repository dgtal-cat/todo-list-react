import React, {Component} from "react";
import Task from "./task";
import "./task-list.css"

export default class TaskList extends Component {

   render() {
      const {todos, onDelete, onDone} = this.props;
      const elements = todos.map((item) => {
         const {id, done, ...taskProps} = item;
         let styleClass = ""
         if (done) {
            styleClass = "completed"
         }
         return (
            <li key={id} className={styleClass}>
               <Task {...taskProps}
                     id={id}
                     done={done}
                     onDelete={() => onDelete(id)}
                     onDone={() => onDone(id)}
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