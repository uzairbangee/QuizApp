import React, {Fragment, Component} from "react"
import './logo.png';
import './Header.css';

class Header extends Component{

    render(){
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-dark">

                    <img src="./logo.png" alt="Logo"/>

                        { this.props.loggedIn && this.props.loggedIn === true &&
                        <div class="btn-group">
                        <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.username}
                        </button>
                        <div class="dropdown-menu">
                            <li class="dropdown-item" onClick={this.props.logout}>logout</li>
                        </div>
                        </div>
                        }
                </nav>
            </Fragment>
        )
    }
}

export default Header;