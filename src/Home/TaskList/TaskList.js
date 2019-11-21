import React, {Component} from 'react'


function TaskList(props)  {
    return(
        <h2 className="taskEntry">{props.task}</h2>
    )
}


export default TaskList