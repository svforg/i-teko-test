import React from 'react';
import { useSelector } from "react-redux";

import { participantsSelectors } from "../../store/participants/selectors";
import { Participants } from "./Participants";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

const ParticipantsView = () => {
  const {
    participants,
    loading,
  } = useSelector(participantsSelectors.baseParticipants);

  const participantsIds = useSelector(participantsSelectors.participantsIds);

  return loading
    ? ( <><LoadingSpinner /></>)
    : (
      <Participants
        participants={participants}
        participantsIds={participantsIds}
      />
    );
};

export default ParticipantsView;