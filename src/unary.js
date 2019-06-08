export default number => (number < 0
  ? 'This algorithm cannot handle negative numbers'
  : `${[...Array(number)].fill(1)}1`
);
