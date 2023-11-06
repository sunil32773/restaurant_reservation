import "./Header.css"
import { maxWidth } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
              className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2 mr-3'
              style={{ maxHeight: '1000px', maxWidth: '1000px'}}
            navbarScroll
          >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="#action1" style={{marginLeft: '50px' }}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{marginLeft: '50px' }}>About</Nav.Link>
            <Nav.Link href="#action3" style={{marginLeft: '50px' }}>Contact</Nav.Link>
            <Nav.Link href="#action4" style={{marginLeft: '50px' }}>Bookings</Nav.Link>
            <Button className="btn-warning mx-5">Login</Button>

            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;