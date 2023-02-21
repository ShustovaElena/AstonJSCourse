const getUniqArray = (arr) => {
  const TEXT_ERROR = 'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел';
  if (arr.some((item) => typeof item !== 'number')) {
    throw new Error(TEXT_ERROR);
  }

  return [...new Set(arr)];
};
