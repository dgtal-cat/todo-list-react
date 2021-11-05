import React, {Component} from "react";

import "./new-task-form.css"

export default class NewTaskForm extends Component {
   state = {

   }

   addByEnter = (event) => {
      if(event.key === "Enter"){
         return this.props.addTask("test")
      }
   }

   render() {
      return <input
         className="new-todo"
         placeholder="What needs to be done?"
         autoFocus
         onKeyUp={this.addByEnter}/>
   }
}