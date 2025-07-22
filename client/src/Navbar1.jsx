import { Navbar, Nav } from "react-bootstrap";
import './App.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar1 = () => {
  return (
    <div>
      <Navbar expand="lg" className="main-nav">
          <h1 className='brand'>AVODHA</h1>
          <Navbar.Toggle aria-controls="navbarScroll" className='m-auto'/>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto p-5">
                <Nav.Link id='nav1' as={Link} to="/" >
                    Home
                </Nav.Link>
                <Nav.Link id='nav1' as={Link} to="/create">
                    Create New
                </Nav.Link>
                <Nav.Link id='nav1' as={Link} to="/details">
                    ViewAll
                </Nav.Link >     
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navbar1
