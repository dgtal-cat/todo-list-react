import React, {Component} from "react";
import "./filter-button.css"

export default class FilterButton extends Component {

   isSelected = (name) => {
      return this.props.filter === name ? 'selected' : ''
   }

   render() {
      const {name, setFilter} = this.props
      return (
         <button
            className={this.isSelected(name)}
            onClick={() => setFilter(name)}
         >{name}</button>
      )
   }
}