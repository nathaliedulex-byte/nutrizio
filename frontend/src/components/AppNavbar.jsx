import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function AppNavbar() {
  const { token, logout } = useAuth();
  return (
    <Navbar expand="lg" className="nutrizio-navbar sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-wrap">
          <img src="/src/assets/logo.svg" alt="Nutrizio logo" className="brand-logo" />
          <span>Nutrizio</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/analyze">Image Analysis</Nav.Link>
            <Nav.Link as={NavLink} to="/meals">Meal Log</Nav.Link>
            <Nav.Link as={NavLink} to="/estimator">Estimator</Nav.Link>
            <Nav.Link as={NavLink} to="/bmi">BMI</Nav.Link>
            <Nav.Link as={NavLink} to="/chatbot">Chatbot</Nav.Link>
            {token ? <button className="btn btn-success-soft" onClick={logout}>Logout</button> : <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
