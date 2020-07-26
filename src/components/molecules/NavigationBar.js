import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import '../../stylesheets/NavigationBar.scss';



export default class NavigationBar extends React.Component{
    render(){
        return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav> 
                    <Nav.Item>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav.Item>    
                    <Nav.Item>
                        <a class='nav-link' href="https://wiki.thomas-driscoll.com">Projects</a>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                    </Nav.Item>  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }

}