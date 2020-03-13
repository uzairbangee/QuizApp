import React, {Fragment} from 'react'
import "./Marks.css";

const Marks = (props) => {
    return (
        <Fragment>
            <div className="card newone">
                <div className="card-body">
                    <p className="card-text">You have scored Marks</p>
                        <h3 className="card-text marks">{props.marks} Marks</h3>
                </div>
            </div>
            <div className="card newone">
                <div className="card-body">
                    <p className="card-text">You have scored Percentage</p>
                        <h3 className="card-text marks">{props.percent} %</h3>
                </div>
            </div>
        </Fragment>
    );
}

export default Marks;

