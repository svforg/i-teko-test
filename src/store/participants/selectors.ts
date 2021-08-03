import {TAppState} from "../index";

interface IRootState extends TAppState {}

const baseParticipants = (state: IRootState) => state.participants;
const isUserAuth = (state: IRootState) => state.participants.isUserAuth;
const currentUser = (state: IRootState) => state.participants.currentUser;
const participants = (state: IRootState) => state.participants.participants;
const participantsIds = (state: IRootState) => Object.keys(state.participants.participants);
const loading = (state: IRootState) => state.participants.loading;

export const participantsSelectors = {
  baseParticipants,
  isUserAuth,
  currentUser,
  participants,
  participantsIds,
  loading,
};