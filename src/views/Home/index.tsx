import React from 'react';
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store";
import { participantsSelectors } from "../../store/participants/selectors";
import { participantsAC } from "../../store/participants/actions";
import { IFormValues } from "../../store/participants/reducer";

import { Home } from "./Home";

const HomeView = () => {
  const currentUser = useSelector(participantsSelectors.currentUser);

  const dispatch = useAppDispatch();

  const pushNewParticipant = (values: IFormValues) => dispatch(participantsAC.pushNewParticipantAC(values));
  const setCurrentUser = (values: IFormValues) => dispatch(participantsAC.setCurrentUserAC(values));

  return (
    <Home
      currentUser={currentUser}
      agreement={false}

      pushNewParticipant={pushNewParticipant}
      setCurrentUser={setCurrentUser}
    />
  );
};

export default HomeView;