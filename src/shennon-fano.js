import _ from 'lodash';

const getUniqueSymbols = text => text
  .split('')
  .reduce((acc, symbol) => (acc.includes(symbol)
    ? acc
    : [...acc, symbol]), []);

const codingAlphabet = (symbols) => {
  const iter = (acc, code, restSymbols) => {
    if (restSymbols.length === 0) {
      return acc;
    }
    if (restSymbols.length === 1) {
      const [symbol] = restSymbols;
      return { ...acc, [symbol]: code };
    }

    const [leftPart, rightPart] = _.chunk(restSymbols, restSymbols.length / 2);
    return {
      ...iter(acc, `${code}0`, leftPart),
      ...iter(acc, `${code}1`, rightPart),
    };
  };

  const [leftPart, rightPart] = _.chunk(symbols, symbols.length / 2);
  return {
    ...iter({}, '0', leftPart),
    ...iter({}, '1', rightPart),
  };
};

export default (text) => {
  const alphabet = getUniqueSymbols(text);
  const codedAlphabet = codingAlphabet(alphabet);

  return text
    .split('')
    .map(symbol => codedAlphabet[symbol])
    .join('');
};
