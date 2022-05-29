import { Navbar, Container,NavDropdown, Nav, Button } from "react-bootstrap"


const MyNavbar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/calendar">MyTrainy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/prog-card-dash">Programmi</Nav.Link>
                    <Nav.Link href="/courses">Corsi</Nav.Link>
                    <Nav.Link href="/diary">Diario</Nav.Link>
                    <NavDropdown title="Profilo" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Button className="text-light">Nuovo</Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;