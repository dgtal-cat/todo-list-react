import React, {Component} from "react";
import "./filter-button.css"

export default class FilterButton extends Component {
   state = {
      selectedFilter: 'All'
   }

   isSelected = (value) => {
      return this.state.selectedFilter === value ? 'selected' : ''
   }

   setSelected = (e) => {
      this.setState(() => {
         return {
            selectedFilter: e.target.value
         }
      })

   }

   render() {
      const {name} = this.props
      return (
         <button
            className={this.isSelected('All')}
            onClick={this.setSelected}
         >{name}</button>
      )
   }
}