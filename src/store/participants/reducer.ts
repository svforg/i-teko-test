import {PARTICIPANTS_TYPES} from "./acTypes";
import {TParticipantsAC} from "./actions";

export interface IParticipant {
  FIO: string
  birthday: string
  email: string
  phone: string
  distance: 3 | 5 | 10
  payment: number
  agreement: boolean
  password?: string
}
export type TParticipantsState = {
  participants: IParticipant[]
  loading: boolean
  isUserAuth: boolean
  error: {
    isError: boolean
    message: string
  }
}

let initialState: TParticipantsState = {
  participants: [],
  loading: false,
  isUserAuth: false,
  error: {
    isError: false,
    message: ""
  }
};

export const participantsReducer = (state: TParticipantsState = initialState,
                                 action: TParticipantsAC): TParticipantsState => {
  const { type, payload } = action;

  switch (type) {

    case PARTICIPANTS_TYPES.SET_PARTICIPANTS_DATA_TYPE: {
      return Array.isArray(payload.participants) && payload.participants.length > 0
        ? {...state, participants: [...payload.participants]}
        : state;
    }

    case PARTICIPANTS_TYPES.SET_LOADING_TYPE: {
      return {...state, loading: payload.loading}
    }

    default:
      return state;
  }
};
