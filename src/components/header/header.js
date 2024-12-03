import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Trang chủ</NavLink>
                        <NavLink to="/users" className='nav-link'>Người dùng</NavLink>
                        <NavLink to="/admin" className='nav-link'>Quản trị</NavLink>
                    </Nav>
                    <Nav className="me-auto">
                        <NavDropdown title="Cài đặt" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Đăng nhập</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Đăng xuất</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Thông tin
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;