import React, {Component} from "react";

import "./new-task-form.css"

export default class NewTaskForm extends Component {
   state = {
      label: ''
   }

   onLabelChange = (element) => {
     this.setState({
        label: element.target.value
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