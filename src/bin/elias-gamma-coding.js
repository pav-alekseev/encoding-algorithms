#!/usr/bin/env node

import getData from '..';
import eliasGamme from '../codings/elias-gamma';

const data = getData();
const result = eliasGamme(data);

console.log(`Результат: ${result}`);
