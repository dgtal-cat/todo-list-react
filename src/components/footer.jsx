import React, {Component} from "react"
import PropTypes from "prop-types"

import "./footer.css"

import TasksFilter from "./tasks-filter"

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends Component {

   static defaultProps = {
      todoCount: 0,
      onClearCompleted: () => {},
      filter: 'All',
      setFilter: () => {}
   }

   static propTypes = {
      todoCount: PropTypes.number,
      onClearCompleted: PropTypes.func,
      filter: PropTypes.string,
      setFilter: PropTypes.func
   }

   render() {
      const {todoCount, onClearCompleted, filter, setFilter} = this.props

      return (
         <footer className="footer">
            <span className="todo-count">{todoCount} items left</span>
            <TasksFilter
               filter={filter}
               setFilter={(name) => setFilter(name)}
            />
            <button type="button"
               className="clear-completed"
               onClick={onClearCompleted}>Clear completed</button>
         </footer>
      )
   }
}