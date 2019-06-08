export default number => (number < 0
  ? 'This algorithm cannot handle negative numbers'
  : `${[...Array(Number(number))].fill(1).join('')}0`
);
