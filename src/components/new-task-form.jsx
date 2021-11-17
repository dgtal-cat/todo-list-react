import React, {Component} from "react"
import PropTypes from "prop-types"

import "./new-task-form.css"

export default class NewTaskForm extends Component {
   state = {
      label: ''
   }

   static defaultProps = {
      addTask: () => {}
   }

   static propTypes = {
      addTask: PropTypes.func
   }

   onLabelChange = (event) => {
     this.setState({
        label: event.target.value
     })
   }

   onSubmit = (event) => {
      event.preventDefault()
      this.props.addTask(this.state.label)
      this.setState({
         label: ''
      })
   }

   render() {
      return <form onSubmit={this.onSubmit}>
         <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
         />
      </form>
   }
}