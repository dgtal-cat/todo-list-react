import React, {Component} from "react";

import "./task.css"

export default class Task extends Component {

   state = {
      description: "",
      created: "",
      important: false,
      completed: false,
      editing: false
   }

   onClick = () => {

   }

   render() {
      const {description, created, important = false, completed = false, editing = false} = this.props

      return (
         <div className="view">
            <input className="toggle" type="checkbox" onClick={this.onClick} />
            <label>
               <span className="description">{description}</span>
               <span className="created">{created}</span>
            </label>
            <button className="icon icon-edit"/>
            <button className="icon icon-destroy"/>
         </div>
      )
   }
}