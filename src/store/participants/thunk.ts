import { TAppThunk } from "../index";
import { participantsAC } from "./actions";
import { participantsApi } from "./api";

export class participantsTC {
 static fetchParticipants(): TAppThunk {
   return async (dispatch) => {

     dispatch(participantsAC.setLoadingAC(true));

     try {
       const data = await participantsApi.getParticipants();

       if (data.status === 200) {
         dispatch(participantsAC.setParticipantsDataAC(data.data));
       }
     } catch (error) {
       new Error(`Похоже, что-то пошло не так: ${error}`)
     } finally {
       dispatch(participantsAC.setLoadingAC(false));
     }
   };
 }
}
