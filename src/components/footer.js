import React, {Component} from "react";

import "./footer.css"

import TasksFilter from "./tasks-filter";

export default class Footer extends Component {

   render() {
      const {todoCount, onClearCompleted} = this.props

      return (
         <footer className="footer">
            <span className="todo-count">{todoCount} items left</span>
            <TasksFilter />
            <button
               className="clear-completed"
               onClick={onClearCompleted}
            >Clear completed</button>
         </footer>
      )
   }
}