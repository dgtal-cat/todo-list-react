import React, {Component} from "react";

import "./task.css"

export default class Task extends Component {

   render() {
      const {id, description, created, onDelete, onDone, done} = this.props
      return (
            <div className="view">
               <input id={id} className="toggle" type="checkbox" onClick={onDone} defaultChecked={done}/>
               <label htmlFor={id}>
                  <span className="description">{description}</span>
                  <span className="created">{created}</span>
               </label>
               <button className="icon icon-edit"/>
               <button className="icon icon-destroy" onClick={onDelete}/>
            </div>
      )
   }
}