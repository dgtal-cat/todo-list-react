import React, {Component} from "react"
import PropTypes from "prop-types"
import "./filter-button.css"

export default class FilterButton extends Component {

   static defaultProps = {
      filter: 'All',
      setFilter: () => {}
   }

   static propTypes = {
      name: PropTypes.string.isRequired,
      filter: PropTypes.string,
      setFilter: PropTypes.func
   }

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