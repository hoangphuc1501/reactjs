import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Trang chủ</Nav.Link>
                        <Nav.Link href="#pricing">Quản trị</Nav.Link>
                        <Nav.Link href="#pricing">Người dùng</Nav.Link>
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