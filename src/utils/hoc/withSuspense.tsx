import React from 'react'
import {Container, Spinner} from "react-bootstrap";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => {
    const fallbackUi = (
      <Container>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
    return (
      <React.Suspense fallback={fallbackUi}>
        <WrappedComponent {...props as WCP}/>
      </React.Suspense>
    )
  }
}