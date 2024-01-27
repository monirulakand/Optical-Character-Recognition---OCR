import React, {Component, Fragment} from 'react';
import navLogo from "../Asset/image/navlogo.svg";
import {Navbar} from "react-bootstrap";

class MenuBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="sticky-top" bg="light">
                    <Navbar.Brand ><img className="nav-logo" src={navLogo}/></Navbar.Brand>
                </Navbar>
            </Fragment>
        );
    }
}

export default MenuBar;