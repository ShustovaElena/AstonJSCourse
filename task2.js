const getInterval = (arr, from, to) => {
  errorHandling(arr, from, to);

  const _from = from <= to ? from : to;
  const _to = to <= from ? from : to;

  return arr.filter((item) => item >= _from && item <= _to);
};

const isNumber = (num) => {
  return !Number.isNaN(num) && typeof num === 'number';
};

const isNumberArray = (arr) => {
  return Array.isArray(arr) && !(arr.some((item) => !isNumber(item)));
}

const errorHandling = (arr, from, to) => {
  const FROM_ERROR = 'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом';
  const TO_ERROR = 'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом';
  const ARR_ERROR = 'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения';

  if (!isNumber(from)) throw new Error(FROM_ERROR);
  if (!isNumber(to)) throw new Error(TO_ERROR);
  if (!isNumberArray(arr)) throw new Error(ARR_ERROR);
}
