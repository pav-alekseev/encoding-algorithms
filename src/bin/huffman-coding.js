#!/usr/bin/env node

import getData from '..';
import huffman from '../codings/huffman';

const data = getData();
const result = huffman(data);

console.log(`Результат: ${result}`);
