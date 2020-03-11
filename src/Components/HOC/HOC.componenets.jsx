import React, {Fragment} from 'react';
import Login from "../Login/Login.componenets";

const HOC = ({component: Component, loggedInCheck, username, ...rest }) => {
      return (
        <Fragment>
          {loggedInCheck === true ? <Component username={username}/> : <Login {...rest} username={username} />}
        </Fragment>
      )
}

export default HOC;