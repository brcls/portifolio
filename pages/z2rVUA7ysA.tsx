import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;

export default function Cadastrar() {
  return (
    <div>
      <StyledForm>
        <h1>Cadastrar projeto</h1>
        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="Titulo" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descricao</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Descrição"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <Form.Label>Stack</Form.Label>
          <Form.Control type="text" placeholder="Stack" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Form.Control type="text" placeholder="Link" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Imagem</Form.Label>
          <Form.Control type="file" placeholder="Imagem" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </StyledForm>

      <StyledForm>
        <h1>Cadastrar lista</h1>
        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="Titulo" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Item 1</Form.Label>
          <Form.Control type="text" placeholder="Item 1" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Item 2</Form.Label>
          <Form.Control type="text" placeholder="Item 2" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Item 3</Form.Label>
          <Form.Control type="text" placeholder="Item 3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </StyledForm>
    </div>
  );
}
