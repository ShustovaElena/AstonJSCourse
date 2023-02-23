const deleteElementFromArray = (array, element) => {
  const TEXT_ERROR = 'Параметры функции не валидны!';

  if ((!array || !Array.isArray(array)) || !element) {
    throw new Error(TEXT_ERROR);
  }

  const elementIndex = array.indexOf(element);

  if (elementIndex === -1) {
    return array;
  } else {
    const copyArr = [...array];
    copyArr.splice(elementIndex, 1);

    return copyArr;
  }
};
