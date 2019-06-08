#!/usr/bin/env node

import getData from '..';
import unary from '../codings/unary';

const data = getData();
const result = unary(data);

console.log(`Результат: ${result}`);
