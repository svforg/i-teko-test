import { PARTICIPANTS_TYPES } from "./acTypes";
import { IFormValues, IParticipant } from "./reducer";

export type TParticipantsAC =
    ReturnType<typeof setParticipantsDataAC>
    | ReturnType<typeof pushNewParticipantAC>
    | ReturnType<typeof setCurrentUserAC>
    | ReturnType<typeof updateCurrentParticipantAC>
    | ReturnType<typeof logoutUserAC>
    | ReturnType<typeof setLoadingAC>

export const setParticipantsDataAC = (participants: IParticipant[]) => ({
  type: PARTICIPANTS_TYPES.SET_PARTICIPANTS_DATA_TYPE,
  payload: { participants }
} as any);

export const pushNewParticipantAC = (participant: IFormValues) => ({
  type: PARTICIPANTS_TYPES.PUSH_NEW_PARTICIPANT_TYPE,
  payload: { participant }
} as any);

export const setCurrentUserAC = (user: IFormValues) => ({
  type: PARTICIPANTS_TYPES.SET_CURRENT_USER_TYPE,
  payload: { user }
} as any);

export const updateCurrentParticipantAC = (user: IFormValues) => ({
  type: PARTICIPANTS_TYPES.UPDATE_CURRENT_PARTICIPANT_TYPE,
  payload: { user }
} as any);

export const logoutUserAC = () => ({
  type: PARTICIPANTS_TYPES.LOGOUT_USER_TYPE,
} as any);

export const setLoadingAC = (loading: boolean) => ({
  type: PARTICIPANTS_TYPES.SET_LOADING_TYPE,
  payload: { loading }
} as any);

export const participantsAC = {
  setParticipantsDataAC,
  pushNewParticipantAC,
  setCurrentUserAC,
  updateCurrentParticipantAC,
  logoutUserAC,
  setLoadingAC
};
