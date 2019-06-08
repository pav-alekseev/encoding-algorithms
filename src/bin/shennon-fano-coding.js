#!/usr/bin/env node

import getData from '..';
import shennonFano from '../codings/shennon-fano';

const data = getData();
const result = shennonFano(data);

console.log(`Результат: ${result}`);
