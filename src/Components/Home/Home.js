import React, {Component} from 'react'
import TaskList from './TaskList/TaskList'
import AddTask from './AddTask/AddTask'
import './Nav.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {
             taskList: ['get dressed', 'golf', 'read stuff'],
             task: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addTask = () => {
        this.setState({
            taskList: [...this.state.taskList, this.state.task],
            task: ''
        })
    }

    deleteTask =(i) => {
        console.log(typeof(i))
        let tasks = this.state.taskList
        console.log(tasks)
        let newList = tasks.splice(parseInt(i) ,1)
        console.log(newList)
        this.setState({
            taskList: tasks
        })
    }

    render() {
        let taskList = this.state.taskList.map((item, i) => {
            return(
                    <div className="task" key={i}>
                        <TaskList 
                        task={item}
                        />
                        <h2 className="delete" onClick={() => this.deleteTask(i)}>X</h2>
                    </div>
            )
        })
        return(
            <div>
                <div className="hero">
                  <div className="home">
                    {taskList}                    
                  </div>
                </div>
                <div>
                    <AddTask
                    handleInput={this.handleInput} 
                    addTask={this.addTask}
                    task={this.state.task}/>
                </div>
            </div>
        )
    }
}
export default Home