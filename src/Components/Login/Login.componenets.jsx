import React, {Fragment } from 'react';
import InputItems from './InputItems/InputItem.components';
import './Login.css'

const Login = (props) => {

        return (
            <Fragment>
                {props.loggedIn  === true &&
                <div className="alert alert-success" role="alert">
                    Success
                </div>
                }
                {
                props.loggedIn === false &&
                <div className="alert alert-danger" role="alert">
                Wrong Credentials
                </div>
                }

                <form onSubmit={props.submit}>
    
                    <div className="container">
                        <InputItems
                            name="username"
                            id="username"
                            label="Username"
                            placeholder="Enter Username"
                            type="text"
                            value={props.username}
                            change={props.change}/>
    
                        <InputItems
                            name="password"
                            id="password"
                            label="password"
                            placeholder="Enter password"
                            type="password"
                            value={props.password}
                            change={props.change}/>
    
                        <button type="submit">Login</button>
    
                    </div>
                </form>
            </Fragment>
        );
}

export default Login;
