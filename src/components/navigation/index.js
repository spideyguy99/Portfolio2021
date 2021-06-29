import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

import Headshot from '../assets/images/profile.jpeg';

export default function NavigationBar(){
    return(
        <div className={"navHolder"}>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <LinkContainer to="/">
                    <div className={"brandContainer"}>
                        <img src={Headshot} alt={"profile shot"} className={"navImg"}/>
                        <Navbar.Brand>Noah Furniss</Navbar.Brand>
                    </div>
                </LinkContainer>
                <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                <Navbar.Collapse id={"responsive-navbar-nav"}>
                    <Nav className="mr-auto">
                        <LinkContainer to={'/'}>
                            <Nav.Link>Welcome</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/about'}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/resume'}>
                            <Nav.Link>Resume</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/projects'}>
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}