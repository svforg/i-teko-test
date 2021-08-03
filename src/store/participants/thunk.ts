import { TAppThunk } from "../index";
import { participantsAC } from "./actions";
import { participantsApi } from "./api";

export class participantsTC {
 static fetchParticipants(): TAppThunk {
   return async (dispatch) => {

     dispatch(participantsAC.setLoadingAC(true));

     try {
       const data = await participantsApi.getParticipants();

       if (data.code === 200) {
         console.log('Ответ от клиента: Данные Получены');
         dispatch(participantsAC.setParticipantsDataAC(data.data.participants));
       }
     } catch (error) {
       new Error(`Похоже, что-то пошло не так: ${error}`)
     } finally {
       dispatch(participantsAC.setLoadingAC(false));
     }
   };
 }
}
