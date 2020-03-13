import React, {Fragment} from 'react'

const Answers = (props) => {
    return (
        <Fragment>
            <div className="card card-body answer question">
                <input type="radio" name="answer" value={props.value} checked={props.select} onChange={props.change} id="input_{props.key}"/>
                <label htmlFor="input_{props.key}">
                    <span className="text">{ props.answer }</span>
                </label>
            </div>
        </Fragment>
    );
}

export default Answers;

