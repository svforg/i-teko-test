import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { participantsSelectors } from "../../store/participants/selectors";

export const withRedirectToHome = (Component: React.FC) => (props: any) => {
  const { isUserAuth } = useSelector(participantsSelectors.baseParticipants);

  if (!isUserAuth) {
    return (
      <Redirect to={{
        pathname: '/',
        state: {from: props.location},
      }}/>
    );
  }

  return <Component/>
};
