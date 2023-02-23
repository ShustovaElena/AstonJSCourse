function addElementsToArray(array, index) {
  return function(...args) {
    if (index && (!Number.isInteger(index) || index < 0)) {
      throw new Error('The index cannot be a negative number or a fractional number');
    }

    if (!index || index > array.length) {
      return [...array, ...args];
    }

    const copyArray = [...array];
    copyArray.splice(index, 0, ...args);

    return copyArray;
  }
}
