import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../store";
import { participantsTC } from "../store/participants/thunk";
import { participantsSelectors } from "../store/participants/selectors";

import { AppRoutes } from "../routes/AppRoutes";
import { withSuspense } from "../utils/hoc/withSuspense";
import { AppNavBar } from "../components/AppNavBar/AppNavBar";

export const Root = () => {
  const participants = useSelector(participantsSelectors.participants);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Object.keys(participants).length === 0) {
      dispatch(participantsTC.fetchParticipants());
    }
  }, [dispatch, participants]);

  return (
    <>
      <AppNavBar />

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
