import React, {Fragment, Component} from "react"
import "./QuizStart.css"
import { Link } from "react-router-dom";

class QuizStart extends Component{

    render(){
        return (
            <Fragment>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, {this.props.username}</h1>
                    <p className="lead">Are you ready for the Quiz</p>
                    <hr className="my-4"/>
                    <p>Let's Get Started</p>
                    <p className="lead">
                    <Link to="/start">
                        <button className="btn-lg">Get Started</button>
                    </Link>
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default QuizStart;