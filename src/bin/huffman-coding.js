#!/usr/bin/env node

import getData from '..';
import huffman from '../codings/shennon-fano';

const data = getData();
const result = huffman(data);

console.log(`Result: ${result}`);
