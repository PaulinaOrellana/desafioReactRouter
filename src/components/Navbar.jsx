import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar style={{ background: "rgb(220, 53,70" }} variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🏡Home
            </Link>
            <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
              📒Contacto
            </Link>
          </Nav>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Happy Cake 🍰
            </Link>
        </Container>
      </Navbar>
    </>
  );
}
