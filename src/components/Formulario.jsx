import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Formulario() {
  return (
    <div className="d-flex align-items-center h-100">
    <Form className="w-50 mx-auto">
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Correo</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicDescription">
      <Form.Label>Descripción</Form.Label>
      <Form.Control as="textarea" rows="3" />
    </Form.Group>

    <Button variant="danger" type="submit" className="d-flex mx-auto" style={{margin: "1rem 2rem"}}>
      Enviar
    </Button>
  </Form>
  </div>
);
}