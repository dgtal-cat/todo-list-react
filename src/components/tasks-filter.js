import React, {Component} from "react";

import FilterButton from "./filter-button";

import "./tasks-filter.css"

export default class TasksFilter extends Component{

   FILTER_MAP = ['All', 'Active', 'Completed']

   render() {
      const {filter, setFilter} = this.props
      const filtersList = this.FILTER_MAP.map((name) => {
            return (
               <li key={name}>
                  <FilterButton
                     name={name}
                     filter={filter}
                     setFilter={(name) => setFilter(name)}/>
               </li>
            )
         }
      )

      return (
         <ul className="filters">
            {filtersList}
         </ul>
      )
   }
}