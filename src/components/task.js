import React, {Component} from "react";
import { formatDistanceToNow } from 'date-fns'

import "./task.css"

export default class Task extends Component {

   render() {
      const {id, label, created, onDelete, onDone, done} = this.props
      return (
            <div className="view">
               <input
                  id={id}
                  className="toggle"
                  type="checkbox"
                  onClick={onDone}
                  defaultChecked={done}/>
               <label htmlFor={id}>
                  <span className="label">{label}</span>
                  <span className="created">{formatDistanceToNow(created)}</span>
               </label>
               <button className="icon icon-edit"/>
               <button className="icon icon-destroy" onClick={onDelete}/>
            </div>
      )
   }
}