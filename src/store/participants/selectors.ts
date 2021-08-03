import {TAppState} from "../index";

interface IRootState extends TAppState {}

const baseParticipants = (state: IRootState) => state.participants;

export const participantsSelectors = {
  baseParticipants,
};