import { PARTICIPANTS_TYPES } from "./acTypes";
import { TParticipantsAC } from "./actions";
import { formatDateYYYYMMDD } from "../../utils/helpers/formatDateYYYYMMDD";

export interface IFormValues {
  FIO: string
  birthday: Date
  email: string
  phone: string
  distance: 3 | 5 | 10
  payment: number
  password?: string
}
export interface IParticipant extends IFormValues {
  date: string
}
export interface ICurrentUser extends IParticipant {
  userId: number | null
}
export interface IParticipantsAssoc {
  [key: number]: IParticipant
}
export type TParticipantsState = {
  currentUser: ICurrentUser
  participants: IParticipantsAssoc
  loading: boolean
  isUserAuth: boolean
  error: {
    isError: boolean
    message: string
  }
}
const initialCurrentUser: ICurrentUser = {
  userId: null,
  FIO: "",
  birthday: new Date(),
  date: formatDateYYYYMMDD(new Date()),
  email: "",
  phone: "",
  distance: 3,
  payment: 100,
  password: "",
};

let initialState: TParticipantsState = {
  currentUser: initialCurrentUser,
  participants: {},
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
        ? {...state,
          participants: {
            ...state.participants,
            ...Object.assign({}, [...payload.participants])
          }
        } : state;
    }

    case PARTICIPANTS_TYPES.PUSH_NEW_PARTICIPANT_TYPE: {
      return {
        ...state,
        participants: {
          ...state.participants,
          [Object.keys(state.participants).length]: {...payload.participant, date: formatDateYYYYMMDD(new Date())}
        }
      }
    }

    case PARTICIPANTS_TYPES.SET_CURRENT_USER_TYPE: {
      return {
        ...state,
        currentUser: {...payload.user, userId: Object.keys(state.participants).length - 1},
        isUserAuth: true,
      }
    }

    case PARTICIPANTS_TYPES.UPDATE_CURRENT_PARTICIPANT_TYPE: {
      return state.currentUser.userId !== null ? {
        ...state,
        participants: {
          ...state.participants,
          [state.currentUser.userId]: {
            ...state.participants[state.currentUser.userId],
            ...payload.user
          }
        }
      } : state;
    }

    case PARTICIPANTS_TYPES.LOGOUT_USER_TYPE: {
      return {...state, currentUser: {...initialCurrentUser}, isUserAuth: false}
    }

    case PARTICIPANTS_TYPES.SET_LOADING_TYPE: {
      return {...state, loading: payload.loading}
    }

    default:
      return state;
  }
};



