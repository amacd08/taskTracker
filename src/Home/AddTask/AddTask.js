import React, {Component} from 'react'


function AddTask(props) {

    
    return(
        <div  className="addTask">
            <h2>Add Task!</h2>
            <div>
                <input type='text' name='task' value={props.task} onChange={(e) => props.handleInput(e)}></input>
                <button onClick={props.addTask}>Submit</button>
            </div>
        </div>
    )

}

export default AddTask