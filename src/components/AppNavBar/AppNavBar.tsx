import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../logo.svg";

import { useAppDispatch } from "../../store";
import { participantsSelectors } from "../../store/participants/selectors";
import { participantsAC } from "../../store/participants/actions";

export const AppNavBar = () => {
  const { isUserAuth, currentUser } = useSelector(participantsSelectors.baseParticipants);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(participantsAC.logoutUserAC());
    history.push("/");
  };

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to={'/'}>
            <img
              alt="IT-Resource"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            IT-Resource
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={'/participants'}>Participants</NavLink>

              {isUserAuth && (
                <NavLink
                  className="nav-link"
                  to={'/profile'}
                >
                  Profile
                </NavLink>
              )}
            </Nav>

            {isUserAuth && (
              <>
                <Navbar.Text style={{marginRight: 24}}>
                  Добро пожаловать, {currentUser.FIO}!
                </Navbar.Text>

                <Button
                  onClick={handleLogout}
                  variant="outline-secondary"
                >
                  Выйти
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
