import React, {Component} from "react";

import "./footer.css"

import TasksFilter from "./tasks-filter";

export default class Footer extends Component {

   render() {
      const {todoCount, onClearCompleted, filter, setFilter} = this.props

      return (
         <footer className="footer">
            <span className="todo-count">{todoCount} items left</span>
            <TasksFilter
               filter={filter}
               setFilter={(name) => setFilter(name)}/>
            <button
               className="clear-completed"
               onClick={onClearCompleted}>Clear completed</button>
         </footer>
      )
   }
}