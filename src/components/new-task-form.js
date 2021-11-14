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

   onLabelChange = (e) => {
     this.setState({
        label: e.target.value
     })
   }

   onSubmit = (e) => {
      e.preventDefault()
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