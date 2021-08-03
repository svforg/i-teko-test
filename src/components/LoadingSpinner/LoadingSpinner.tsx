import React from 'react';
import { Container, Spinner } from "react-bootstrap";

export const LoadingSpinner = () => {
  return (
    <Container>
      <Spinner animation="border" variant="primary" />
    </Container>
  );
};
