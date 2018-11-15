//@flow
export function formatNumberComma(num: number) {
  return num
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    .split('.')[0]
    .replace(/,/g, ',');
}
