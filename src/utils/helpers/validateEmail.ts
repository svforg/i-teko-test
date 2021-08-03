export default (value: string) => {
  let error;
  if (!value) {
    error = 'Введите ваш e-mail адрес';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Неверный e-mail';
  }
  return error;
};