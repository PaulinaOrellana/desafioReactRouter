import Contacto from "../components/Formulario.jsx"
import { Container } from "react-bootstrap";


export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos, ¿en qué podemos ayudarte?</h1>
      <Contacto/>
    </Container>
  );
};
