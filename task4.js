const getUniqArray = (arr) => {
  const TEXT_ERROR = 'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел';

  if (!Array.isArray(arr) || arr.some((item) => Number.isNaN(item) || typeof item !== 'number')) {
    throw new Error(TEXT_ERROR);
  }

  return [...new Set(arr)];
};
