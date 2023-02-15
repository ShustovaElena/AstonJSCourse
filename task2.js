const getNumberRadix = (number, radix) => {
  const num = +number;
  if (Number.isInteger(num) && num > 0 && radix >= 2 && radix <= 16) {
    return num.toString(radix);
  }
  throw Error("Функция getNumberRadix была вызвана с некорректными параметрами");
}
