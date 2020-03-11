import React, {Fragment} from 'react'
import "./Marks.css";

const Marks = (props) => {
    return (
        <Fragment>
            <div className="card newone">
                <div className="card-body">
                    <p className="card-text">You have scored Marks</p>
                        <h3 className="card-text">{props.marks} Marks</h3>
                </div>
            </div>
        </Fragment>
    );
}

export default Marks;

