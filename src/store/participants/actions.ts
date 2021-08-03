import {PARTICIPANTS_TYPES} from "./acTypes";

export type TParticipantsAC =
    ReturnType<typeof setParticipantsDataAC>
    | ReturnType<typeof setLoadingAC>

export const setParticipantsDataAC = (participants: any) => ({
  type: PARTICIPANTS_TYPES.SET_PARTICIPANTS_DATA_TYPE,
  payload: { participants }
} as any);

export const setLoadingAC = (loading: boolean) => ({
  type: PARTICIPANTS_TYPES.SET_LOADING_TYPE,
  payload: { loading }
} as any);

export const participantsAC = {
  setParticipantsDataAC,
  setLoadingAC
};
