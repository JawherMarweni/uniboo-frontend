import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="dark"
      variant="dark"
      className="navBar"
    >
      <Container fluid class="navBar_container">
        <Navbar.Brand href="/home">UniBoo </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/docs">Docs</Nav.Link>
            <Nav.Link href="/setting">Setting</Nav.Link>
            <Nav.Link href="/dashbord">Dashbord</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {/* <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link> */}
          </Nav>
          {/* <Button variant="outline-light" href="/signup">
            Sign up
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
