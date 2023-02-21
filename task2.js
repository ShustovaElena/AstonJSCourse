const getInterval = (arr, from, to) => {
  const FROM_ERROR = 'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом';
  const TO_ERROR = 'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом';
  const ARR_ERROR = 'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения';

  if (typeof from !== 'number') {
    throw new Error(FROM_ERROR);
  }

  if (typeof to !== 'number') {
    throw new Error(TO_ERROR);
  }

  if (arr.some((item) => typeof item !== 'number')) {
    throw new Error(ARR_ERROR);
  }

  if (from > to) {
    return arr.slice(to, from + 1);
  } else {
    return arr.slice(from, to + 1);
  }
};
