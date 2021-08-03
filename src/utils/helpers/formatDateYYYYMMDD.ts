export function formatDateYYYYMMDD(dateStr: Date) {

  const y = dateStr.getFullYear();
  const month = dateStr.getMonth() + 1;
  const mo = (month <= 9 ? '0' + month : month);
  const day = dateStr.getDate();
  const d = (day <= 9 ? '0' + day : day);

  return `${y}-${mo}-${d}`;
}