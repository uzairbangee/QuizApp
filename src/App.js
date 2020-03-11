import React, {Fragment, Component} from 'react';
import Header from "./Components/Header/Header.components";
import QuizStart from "./Components/QuizStart/QuizStart.components"
import HOC from "./Components/HOC/HOC.componenets";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Quiz from './Components/Quiz/Quiz.components';



class App extends Component {


  state = {
    username: "",
    password: "",
    loggedIn: "",
    users : [
        {
            username: "Uzair",
            password: "12345678"
        }
      ]
  }

  handleChange = ({ target }) => {
      this.setState({ [target.name] : target.value });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const {users, username, password} = this.state;
      const loggedInCheck = users.some(item => item.username.toLowerCase() === username.toLowerCase() && item.password === password.toLowerCase());
          this.setState({
              'loggedIn' : loggedInCheck,
              "password": ""
          });
      localStorage.setItem('loggedIn', loggedInCheck);
      loggedInCheck === true && localStorage.setItem('username', username);
  }

  logout = (e) => {
    e.preventDefault();
    this.setState({'loggedIn' : false});
    localStorage.setItem('loggedIn', false);
    localStorage.removeItem('username');

  }



  render() {
    const {username, password, loggedIn} = this.state;
    // const loggedInCheck = localStorage.getItem('loggedIn');
    // const usernameCheck = localStorage.getItem('username');
    // console.log(typeof loggedInCheck);

    return (
      <Fragment>
        <BrowserRouter>
          <Header
            username={username}
            loggedIn={loggedIn}
            logout={this.logout}
            />
            <Switch>

              <Route exact path="/">
                <HOC 
                  loggedInCheck={loggedIn}
                  component={QuizStart}
                  username={username} 
                  password={password} 
                  loggedIn={loggedIn}
                  change={this.handleChange}
                  submit={this.handleSubmit}/>
              </Route>

              <Route path="/start">
                <HOC 
                  loggedInCheck={loggedIn}
                  component={Quiz}
                  username={username} 
                  password={password} 
                  loggedIn={loggedIn}
                  change={this.handleChange}
                  submit={this.handleSubmit}
                />
              </Route>
                

          </Switch>
        </BrowserRouter>
        </Fragment>
    );
  }
}

export default App;
