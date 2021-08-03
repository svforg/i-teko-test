import { participantsMockData } from "./participantsMockData";
import { ApiService } from "../../services";

export class participantsApi {
  static getParticipants(): Promise<any> {

    const api = new ApiService();

    const answer = {
      "code": 200,
      "status": "OK",
      "data": {
        "participants": participantsMockData
      }
    };

    return api
      .returnPromiseWithData(answer, 1000)
  };
}
