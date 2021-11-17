import React, {Component} from "react"
import PropTypes from "prop-types"
import { formatDistanceToNow } from 'date-fns'

import "./task.css"

export default class Task extends Component {

   static defaultProps = {
      created: Date.now(),
      done: false,
      onDelete: () => {},
      onDone: () => {},
      onEditTask: () => {},
      onSaveTask: () => {}
   }

   static propTypes = {
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      created: PropTypes.number,
      done: PropTypes.bool,
      onDelete: PropTypes.func,
      onDone: PropTypes.func,
      onEditTask: PropTypes.func,
      onSaveTask: PropTypes.func
   }

   state = {
      isEditing: false,
      newLabel: ''
   }

   setNewLabel = (event) => {
      this.setState({
         newLabel: event.target.value
      })
   }

   render() {
      const {id, label, created, done, onDelete, onDone, onEditTask, onSaveTask} = this.props
      const wasCreatedText = `created ${formatDistanceToNow(created)} ago`

      const edit = () => {
         onEditTask(id)

         this.setState(() => ({
               isEditing: true,
               newLabel: label
            }))

         if (done) {
            onDone(id)
         }
      }

      const save = (event) => {
         event.preventDefault()
         onSaveTask(id, this.state.newLabel)

         this.setState(() => ({ isEditing: false }))
      }

      const viewTemplate = (
         <div className="view">
            <input
               id={id}
               className="toggle"
               type="checkbox"
               onClick={onDone}
               defaultChecked={done}/>
            <label htmlFor={id}>
               <span className="label">{label}</span>
               <span className="created">{wasCreatedText}</span>
            </label>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="icon icon-edit" onClick={edit}/>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="icon icon-destroy" onClick={onDelete}/>
         </div>
      )

      const editingTemplate = (
         <div>
            <form onSubmit={save}>
               <input
                  type="text"
                  className="edit"
                  autoFocus
                  placeholder="Enter new text here"
                  defaultValue={label}
                  onChange={this.setNewLabel}
               />
            </form>
            <button type="button" className="save-button" onClick={save}>Save</button>
         </div>
      )

      return this.state.isEditing ? editingTemplate : viewTemplate
   }
}