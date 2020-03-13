import React, {Fragment, Component} from "react"
import "./Quiz.css"
import Answers from "../Answers/Answers.components";
import Marks from "../Marks/Marks.components";

const data = [
    {
        id : 1,
        status: false,
        question: "What is your your favorite fruit?",
        answers : [
            {
                answer : 'apple',
                status: 'correct',
            },
            {
                answer : 'orange',
                status: 'wrong',
            },
            {
                answer : 'banana',
                status: 'wrong',
            },
            {
                answer : 'mango',
                status: 'wrong',
            }
        ]
    },
    {
        id : 2,
        status: false,
        question: "Who is your your favorite player?",
        answers : [
            {
                answer : 'anwer',
                status: 'correct',
            },
            {
                answer : 'afridi',
                status: 'wrong',
            },
            {
                answer : 'ahmed',
                status: 'wrong',
            },
            {
                answer : 'akmal',
                status: 'wrong',
            }
        ]
    },
    {
        id : 3,
        status: false,
        question: "Who is the winner?",
        answers : [
            {
                answer : 'Pakistan',
                status: 'correct',
            },
            {
                answer : 'India',
                status: 'wrong',
            },
            {
                answer : 'Australia',
                status: 'wrong',
            },
            {
                answer : 'England',
                status: 'wrong',
            }
        ]
    },

]

class Quiz extends Component{

    state = {
        data : data,
        data_index : data.filter(item => item.status === false)[0],
        marks: 0,
        user_select : "",
        disabled: true,
        percentage: 0,

    }

    handleChange = ({target}) => {
        this.setState({user_select : target.value, disabled : false});
    }

    changeQuestion = (event, index) => {
        const newdata = this.state.data;
        let marks = this.state.marks;
        const cal_arr = this.state.data_index.answers.filter(item => item.answer === this.state.user_select);
        cal_arr[0].status === 'correct' ? marks+=1 : marks+=0 ;
        newdata[index].status = true;
        const percent = ((marks/newdata.length) * 100).toFixed(2);
        setTimeout(() => {
            this.setState({data: newdata, data_index : newdata.filter(item => item.status === false)[0],
                        user_select : "",
                        disabled : true,
                        marks : marks,
                        percentage : percent,
                    });
        }, 1000);
    }




    render(){
        const {data_index, data, disabled, marks, user_select, percentage} = this.state;
        console.log(marks);
        return (
            <Fragment>
                {this.state.data_index
                ?
                    <div className="container">
                        <div className="row">
                            <div className="card card-body question no">
                                Question {data_index.id} of {data.length}
                            </div>
                            <div className="card card-body question">
                                {data_index.id}. {data_index.question}
                            </div>
                            {data_index.answers.map((item, index) => <Answers value={item.answer} select={user_select === item.answer ? true : false} key={index} change={this.handleChange} answer={item.answer}/> ) }

                            <button className="btn-lg butt" disabled={disabled} onClick={(event) => this.changeQuestion(event, data_index.id - 1)}>Next</button>
                        </div>
                    </div>
                :
                <Marks marks={marks} percent={percentage}/>
                }
            </Fragment>
        )
    }
}

export default Quiz;