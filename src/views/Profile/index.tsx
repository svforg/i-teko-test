import React from 'react';
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store";
import { participantsSelectors } from "../../store/participants/selectors";
import { participantsAC } from "../../store/participants/actions";
import { IFormValues } from "../../store/participants/reducer";

import { Profile } from "./Profile";

const ProfileView = () => {
  const currentUser = useSelector(participantsSelectors.currentUser);

  const dispatch = useAppDispatch();

  const updateCurrentParticipant = (values: IFormValues) => dispatch(participantsAC.updateCurrentParticipantAC(values));
  const setCurrentUser = (values: IFormValues) => dispatch(participantsAC.setCurrentUserAC(values));

  return (
    <Profile
      currentUser={currentUser}
      agreement={false}

      updateCurrentParticipant={updateCurrentParticipant}
      setCurrentUser={setCurrentUser}
    />
  );
};

export default ProfileView;