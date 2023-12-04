import { useContext, useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar, Spinner } from "react-bootstrap";
import UserContext from "../context/user/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navegador(){
    const navegar=useNavigate();
    const logout=async ()=>{
        const token = localStorage.getItem('keyPostgradoUatf');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get('http://administrativos.test/api/s1/logout', {})
            .then(function (response) {
                navegar('/');
            }).catch(function (error) {
                setSpinner(false);
            });
        localStorage.removeItem('keyPostgradoUatf');
    }
    const {getProfile,nombre} =useContext(UserContext);
    const [spinner,setSpinner] = useState(false);
    if(spinner){
        logout()
    }

    useEffect(()=>{
        getProfile(localStorage.getItem('keyPostgradoUatf'))
    },[])
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Direccion Postgrado U.A.T.F.</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Programas</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Bienvenido: <a href="#login">{nombre}</a>
                    </Navbar.Text>
                    <button onClick={()=>setSpinner(true)} className="btn btn-danger mx-3">Salir {spinner && <Spinner animation="border" size="sm" />}</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}