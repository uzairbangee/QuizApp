import React, {Fragment, Component} from "react"
import logo from './logo.png';
import './Header.css';

class Header extends Component{

    render(){
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-dark">

                    <img src={logo} alt="Logo" className="logo"/>

                        { this.props.loggedIn && this.props.loggedIn === true &&
                        <div class="btn-group">
                        <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.username}
                        </button>
                        <div className="dropdown-menu">
                            <li className="dropdown-item" onClick={this.props.logout}>logout</li>
                        </div>
                        </div>
                        }
                </nav>
            </Fragment>
        )
    }
}

export default Header;