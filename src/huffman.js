const getFreqs = text => [...text]
  .reduce((acc, letter) => (acc[letter]
    ? { ...acc, [letter]: acc[letter] + 1 }
    : { ...acc, [letter]: 1 }
  ), {});

const toPairs = freqs => Object.keys(freqs)
  .map(letter => [letter, freqs[letter]]);

const sortPairs = pairs => [...pairs]
  .sort(([, leftFreq], [, rightFreq]) => leftFreq - rightFreq);

const getTree = pairs => (pairs.length < 2
  ? pairs[0]
  : getTree(sortPairs([
    [pairs.slice(0, 2), pairs[0][1] + pairs[1][1]],
    ...pairs.slice(2)]))
);

const getCodes = (tree, pfx = '') => (tree[0] instanceof Array
  ? Object.assign(
    getCodes(tree[0][0], `${pfx}0`),
    getCodes(tree[0][1], `${pfx}1`),
  )
  : { [tree[0]]: pfx });

export default (text) => {
  const freqs = getFreqs(text);
  const freqPairs = toPairs(freqs);
  const sortedFreqPairs = sortPairs(freqPairs);
  const tree = getTree(sortedFreqPairs);
  const codes = getCodes(tree);

  return codes;
};
