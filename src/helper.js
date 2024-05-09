export function getYear(date) {
  return new Date(date).getFullYear();
}
export function getRuntime(runtime) {
  if (runtime) {
    let h = Math.floor(runtime / 60);
    let m = runtime - h * 60;
    if (h > 0) return `${h} час ${m} минут`;
    return `${m} минут`;
  }else{
    return 'Daqiqalar topilmadi!!!'
  }
}
