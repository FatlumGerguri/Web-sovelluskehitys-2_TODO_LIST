import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import React from "react";

function BasicExample() {

    function LogOut(){
        localStorage.removeItem("Token");
        window.location.reload();
    }


    return (
        <Navbar bg="light" expand="lg" className="p-2">
            <Container>
                <Navbar.Brand href="/todolist">TODO List</Navbar.Brand>

                <Navbar>
                    <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>

 

                                 <Link id="logout" className="text-primary fw-bold " onClick={LogOut} to="/"> Sign out</Link>

                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </Navbar>
    );
}

export default BasicExample;