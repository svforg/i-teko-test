export default class ApiService {
  returnPromiseWithData = (data: any, timeout: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 1) {
          reject(new Error("Похоже, что-то пошло не так :("));
        } else {
          console.log('ответ сервера:');
          resolve(data)
        }
      }, timeout)
    })
  };
}
