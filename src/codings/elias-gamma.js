import decToBin from 'decimal-to-binary';

export default (number) => {
  if (number < 0) {
    return 'This algorithm cannot handle negative numbers';
  }
  if (number === 0) {
    return 'This algorith cannot handle zero number';
  }

  const binaryNumber = decToBin.convertToBinary(number);
  const frontZeros = Array(binaryNumber.length - 1)
    .fill(0)
    .join('');

  return `${frontZeros}${binaryNumber}`;
};
