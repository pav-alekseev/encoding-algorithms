#!/usr/bin/env node

import getData from '..';
import eliasGamme from '../codings/shennon-fano';

const data = getData();
const result = eliasGamme(data);

console.log(`Result: ${result}`);
