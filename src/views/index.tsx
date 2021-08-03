import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";

import {AppRoutes} from "../routes/AppRoutes";
import {withSuspense} from "../utils/hoc/withSuspense";
import {Container, Nav, Navbar} from "react-bootstrap";

export const Root: React.FC = () => {
  return (
    <>
      <header className="header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to={'/participants'}>Participants</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Switch>
          {AppRoutes.map((page) =>
            <Route
              exact={page.exact}
              path={page.link}
              component={withSuspense(page.component)}
              key={page.title}
            />)}
          <Route component={() => <Container>404! Not Found!</Container>}/>
        </Switch>
      </main>
    </>
  );
};
