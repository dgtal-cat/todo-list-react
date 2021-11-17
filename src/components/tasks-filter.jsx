import React, {Component} from "react"
import PropTypes from "prop-types"

import FilterButton from "./filter-button"

import "./tasks-filter.css"

export default class TasksFilter extends Component{

   static defaultProps = {
      filter: 'All',
      setFilter: () => {}
   }

   static propTypes = {
      filter: PropTypes.string,
      setFilter: PropTypes.func
   }

   FILTER_MAP = ['All', 'Active', 'Completed']

   render() {
      const {filter, setFilter} = this.props
      const filtersList = this.FILTER_MAP.map((name) => (
            <li key={name}>
               <FilterButton
                  name={name}
                  filter={filter}
                  setFilter={(filterName) => setFilter(filterName)}
               />
            </li>
         )
      )

      return (
         <ul className="filters">
            {filtersList}
         </ul>
      )
   }
}