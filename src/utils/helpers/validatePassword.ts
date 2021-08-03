export default (value: string) => {
  let error;
  if (!value) {
    error = 'Введите пароль';
  } else if (value.length < 4) {
    error = 'Пароль должен быть длинее 3-х символов';
  }
  return error;
};
