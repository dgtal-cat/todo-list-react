import React, {Component} from "react";

import FilterButton from "./filter-button";

import "./tasks-filter.css"

export default class TasksFilter extends Component{

   FILTERS_MAP = [
      'All',
      'Active',
      'Completed'
   ]

   render() {
      const filters = this.FILTERS_MAP.map((el) => {
            return (
               <li key={el}>
                  <FilterButton name={el}/>
               </li>
            )
         }
      )

      return (
         <ul className="filters">
            {filters}
         </ul>
      )
   }
}