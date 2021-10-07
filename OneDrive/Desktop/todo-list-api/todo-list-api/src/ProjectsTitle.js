import React from "react"

const ProjectsTitle=()=>{
    return(
        <div className="filtercontainer">
            <h1>Projects</h1>
            <select>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="today">Today</option>
        </select>
         </div>   
    )
}

export default ProjectsTitle