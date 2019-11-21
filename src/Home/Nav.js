import React, {Component} from 'react'
import "./Nav.css"

class Nav extends Component{
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return(
            <nav>
                <div className="logoContainer">
                    <div className="logo">
                        <h2>Task Tracker</h2>
                    </div>
                    <div className="text">
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav